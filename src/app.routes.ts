import * as express from 'express';

export class AppRoutes {

    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
    }
}
