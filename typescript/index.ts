import http, {IncomingMessage, ServerResponse} from 'http';
import url from 'url';
import {router} from "./router";

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const reqPathname = url.parse(req.url!).pathname;

    if (reqPathname && router[reqPathname]) {
        const handler = router[reqPathname];
        res.setHeader('Content-Type', 'application/json');
        handler(req, res);
    } else {
        res.statusCode = 404;
        res.end();
    }

    console.info("INFO [%s] %d %s", req.method, res.statusCode, req.url)

    return;
});

server.listen(port, hostname, () => {
    console.info(`Server running at http://${hostname}:${port}/`);
});