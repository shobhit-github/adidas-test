import {App} from './src/core/app';

const fs = require('fs');
const path = require('path');
let filePath = './ormConfig.json';
if (__dirname != null && __dirname !== '' && __dirname !== '/') {
    filePath = path.join(__dirname, filePath);
}

/**
 * Read ormConfig.json from external location
 */
(async function mainServerStarter() {

    /**
     * Start server
     */
    const app = new App();
    await app.bootstrap();
})()
