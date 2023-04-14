import {RequestListener} from "http";
import ping from "./routes/ping";
import health from "./routes/health";

type Route = {
    [path: string] : RequestListener,
};

export const router :Route = {
    '/ping': ping,
    '/health': health,
    '/nearby': (req, res) => {

    },
};