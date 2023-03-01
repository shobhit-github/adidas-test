import express from 'express';
import {Bootstrap} from './bootstrap';
import {Server} from './server';

export class App {

    private express: express.Application = express();
    private bootstrapApp: any;

    constructor() {
        this.bootstrapApp = new Bootstrap();
        // Setup CORS
        this.bootstrapApp.setupCors(this.express);
        // Create express app
        this.bootstrapApp.defineExpressApp(this.express);
    }

    /**
     * This method will bootstrap application
     */
    async bootstrap(): Promise<any> {

        // Configure
        this.bootstrapApp.configure(this.express);

        let activeServer = null;
        activeServer = this.bootstrapApp.startHttpServer(this.express);

        // Setup routes
        this.bootstrapApp.setupRoutes(this.express);

        const server = new Server(activeServer);
        server.use(this.express);

        return server;
    }
}
