"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/core/app");
const fs = require('fs');
const path = require('path');
let filePath = './ormConfig.json';
if (__dirname != null && __dirname !== '' && __dirname !== '/') {
    filePath = path.join(__dirname, filePath);
}
/**
 * Read ormConfig.json from external location
 */
(function mainServerStarter() {
    return __awaiter(this, void 0, void 0, function* () {
        /**
         * Start server
         */
        const app = new app_1.App();
        yield app.bootstrap();
    });
})();
//# sourceMappingURL=main.js.map