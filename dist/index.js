"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dbConnection_1 = require("./dbConnection");
const app_1 = __importDefault(require("./app"));
dbConnection_1.getConnection()
    .then(() => {
    app_1.default.listen(process.env.PORT || 5000, () => {
        console.log(`App has been started on localhost:${process.env.PORT || 5000}`);
    });
})
    .catch((error) => console.log(error));
process.on('unhandledRejection', (reason, p) => {
    console.log('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION ');
    console.log("[Inside 'uncaughtException' event] " + err.stack || err.message);
});
//# sourceMappingURL=index.js.map