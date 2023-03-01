import * as express from "express";
import * as http from "http";
import * as path from "path";
import * as bodyParser from "body-parser";
import ormConfig from '../../ormConfig.json';
import { AppRoutes } from "../app.routes";
import { UserRoutes } from "../modules/users/user.routes";

const cors = require("cors");

export class Bootstrap {
    private SET_API_VERSION: string = "v2";

    constructor() {
    }

    /**
     * Set application port
     * @param app
     */
    defineExpressApp(app: express.Application) {
        app.set("port", ormConfig.Application.EXPRESS_PORT);
    }

    configure(app: express.Application): void {
        app
            // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
            .use(bodyParser.json({ limit: "100mb" }))
            .use(
                bodyParser.urlencoded({
                    limit: "100mb",
                    extended: true,
                })
            );
    }

    /**
     * This method will start http server
     * @param app
     */
    startHttpServer(app: express.Application): http.Server {
        const httpServer = http.createServer(app);
        httpServer.listen(app.get("port"), () => {
            /*console.info(
                "Express server listening on port " + app.get("port")
            );*/
        });

        return httpServer;
    }

    /**
     * It will initialize all server side routes
     * @param app
     */
    setupRoutes(app: express.Application): void {
        app.use(express.static(path.join("./", "client")));

        const rootRoute: string = "/";

        const appRouter = new AppRoutes().router;
        const userRouter = new UserRoutes().router;

        // Routes
        app.use(rootRoute, appRouter);
        app.use(rootRoute, userRouter);
    }

    setupCors(app: express.Application): void {
        app.use(cors());
    }
}
