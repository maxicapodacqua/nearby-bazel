import {RequestListener, ServerResponse} from "http";
import {APIResponse} from "../types";
import connect from "../database/mysql";

type HealthResponse = {
    database: 'healthy' | 'unhealthy',
};

const health: RequestListener = (_, res: ServerResponse) => {
    res.statusCode = 200;
    const response: APIResponse<HealthResponse, null> = {
        data: {
            database: "healthy",
        },
        error: null,
    };

    const conn = connect();
    conn.ping((err) => {
        if (err) {
            response.data.database = "unhealthy";
        }
        res.end(JSON.stringify(response));
    });

};

export default health;