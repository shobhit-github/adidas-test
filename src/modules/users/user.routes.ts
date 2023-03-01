import { AppRoutes } from "../../app.routes";
import {UserController} from "./controller/user.controller";
import * as router from '../users/utils/constants/router.constant';

export class UserRoutes extends AppRoutes {

    private userController: UserController;

    constructor() {
        super();

        this.userController = new UserController();

        this.initRoutes();
    }

    initRoutes() {

        // User Routes
        this.router.get(router.getUserById, (req: any, res: any, next: any) =>
            this.userController.getUserDetails(req, res, next).catch(next)
        );

        this.router.get(router.getUserAndAlbumById, (req: any, res: any, next: any) =>
            this.userController.getUserAlbumsRecord(req, res, next).catch(next)
        );

        this.router.get(router.getAlbumAndImageById, (req: any, res: any, next: any) =>
            this.userController.getAlbumImagesRecord(req, res, next).catch(next)
        );
    }
}
