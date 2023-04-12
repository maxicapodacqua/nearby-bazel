import {RequestListener, ServerResponse} from "http";
import {APIResponse} from "../types";

type PingResponse = {
    pong: 'success',
};

const ping :RequestListener = (req, res:ServerResponse) => {
    res.statusCode = 200;
    const response :APIResponse<PingResponse, null> = {
        data: {
            pong: "success",
        },
        error: null,
    };
    res.end(JSON.stringify(response));
};

export default ping;