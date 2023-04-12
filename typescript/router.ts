import {RequestListener} from "http";
import ping from "./routes/ping";

type Route = {
    [path: string] : RequestListener,
};

export const router :Route = {
    '/ping': ping,
    '/health': (req, res) => {

    },
    '/nearby': (req, res) => {

    },
};