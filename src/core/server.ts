import * as express from 'express';
import "reflect-metadata";

export class Server {

    constructor(public httpServer: any) {
    }

    use(app: express.Application): void {
        this.httpServer.on('listening', () => {
            this.onStartUp(app);
        });
        this.httpServer.on('error', (error?: any) => {
            this.onError(error);
        });
    }

    /**
     * This method will be called when application server is started
     * @param app
     */
    onStartUp(app: express.Application): void {
        const port = app.get('enableHttps') === true ? app.get('securePort') : app.get('port');
        console.log(`✅  Application is ready on ${app.get('host') || 'localhost'}:${port}`);
    }

    /**
     * This method will be called when application server has any error while startup
     * @param error
     */
    onError(error: any): void {
        if (error.syscall !== 'listen') {
            throw error;
        }
        switch (error.code) {
            case 'EACCES':
                console.error(`The Server requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port is already in use or blocked by the os`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}
