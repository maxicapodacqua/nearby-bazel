import {RequestListener} from "http";
import ping from "./routes/ping";
import health from "./routes/health";
import nearby from "./routes/nearby";

type Route = {
    [path: string]: RequestListener,
};

export const router: Route = {
    '/ping': ping,
    '/health': health,
    '/nearby': nearby,
};