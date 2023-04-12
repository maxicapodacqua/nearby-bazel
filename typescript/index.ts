import http, {IncomingMessage, ServerResponse} from 'http';
import url from 'url';
import {router} from "./router";

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const reqPathname = url.parse(req.url!).pathname;

    if (reqPathname) {
        const handler = router[reqPathname];
        if (handler) {
            res.setHeader('Content-Type', 'application/json');
            return handler(req, res);
        }
    }

    res.statusCode = 404;
    res.end();
    return;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});