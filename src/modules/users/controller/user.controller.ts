import {NextFunction, Request, Response, response} from "express";
import {dataSource} from "../../../core/data-source";
import * as txt from '../utils/constants/api.constant';
import {FindManyOptions, FindOneOptions, FindOptionsWhere, Repository} from "typeorm";
import {Albums, Images, Users} from "../../../entities";

export class UserController {


    private userRepository: Repository<Users> = dataSource.getRepository(Users);
    private albumRepository: Repository<Albums> = dataSource.getRepository(Albums);
    private imgRepository: Repository<Images> = dataSource.getRepository(Images);


    constructor() {
    }

    static throwError(errorMessage: string): void {
        throw Error(errorMessage);
    }

    async getUserDetails(request: Request, response: Response, next: NextFunction): Promise<any> {

        try {

            const user = await this.userRepository.findOneBy({id: parseInt(request.params.id)})
            return response.status(200).json({data: user, message: '', status: 'success'});

        } catch (e) {
            console.log("Error triggered: ", (e as Error).message)
            return response.status(400).json({data: null, message: txt.API_ERROR, status: 'error'})
        }
    }


    async getUserAlbumsRecord(request: Request, response: Response, next: NextFunction): Promise<any> {

        try {

            const queryParams: FindManyOptions<Albums> = {
                where: {
                    user: {
                        id: parseInt(request.params.id)
                    }
                },
                skip: parseInt(<string>request.query.skip) || 0,
                relations: ['user'],
                take: parseInt(<string>request.query.limit) || 10,
            };

            const albumRecords = await this.albumRepository.find(queryParams);
            return response.status(200).json({data: albumRecords, message: '', status: 'success'});

        } catch (e) {
            console.log("Error triggered: ", (e as Error).message)
            return response.status(400).json({data: null, message: txt.API_ERROR, status: 'error'})
        }
    }


    async getAlbumImagesRecord(request: Request, response: Response, next: NextFunction): Promise<any> {

        try {

            const queryParams: FindManyOptions<Images> = {
                where: {
                    album: {
                        user: {
                            id: parseInt(request.params.id)
                        }
                    }
                },
                skip: parseInt(<string>request.query.skip) || 0,
                relations: ['album'],
                take: parseInt(<string>request.query.limit) || 10,
            };

            const imageRecords = await this.imgRepository.find(queryParams);
            return response.status(200).json({data: imageRecords, message: '', status: 'success'});

        } catch (e) {
            console.log("Error triggered: ", (e as Error).message)
            return response.status(400).json({data: null, message: txt.API_ERROR, status: 'error'})
        }
    }
}
