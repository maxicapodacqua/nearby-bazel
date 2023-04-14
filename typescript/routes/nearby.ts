import {IncomingMessage, RequestListener, ServerResponse} from "http";
import {APIResponse} from "../types";
import connect from "../database/mysql";
import url from "url";

type NearbyResponse = {
    area_codes: number[]
};
type NearbyDBRow = {
    nearby_area_code: number;
}

const ERR_INVALID_AREA_CODE_INPUT = "invalid value for `area_code`, value must be an integer";
const nearby: RequestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    const response: APIResponse<NearbyResponse> = {
        data: {
            area_codes: [],
        },
        error: null,
    };
    const query = url.parse(req.url!, true).query;

    if (!("area_code" in query) || isNaN(Number(query.area_code)) || !query.area_code) {
        res.statusCode = 422;
        response.error = ERR_INVALID_AREA_CODE_INPUT;
        res.end(JSON.stringify(response));
        return;
    }

    const conn = connect();

    conn.query(
        "SELECT nearby_area_code FROM nearby_area_codes WHERE area_code=?",
        [512],
        (err, results) => {
            if (err) {
                res.statusCode = 500;
                response.error = "Something went wrong with the database";
                res.end(JSON.stringify(response));
                return;
            } else {
                if (results && results.length && Array.isArray(results)) {
                    const castedRes = results as NearbyDBRow[];
                    response.data.area_codes = castedRes.map(value => value.nearby_area_code);
                    res.end(JSON.stringify(response));
                    return;
                }
            }
        }
    );
};

export default nearby;