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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const dbConnection_1 = require("./dbConnection");
const User_1 = require("./entity/User");
const JobDetails_1 = require("./entity/JobDetails");
const Job_1 = require("./entity/Job");
const routes = express_1.Router();
routes.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    let userRepository = yield dbConnection_1.getRepository(User_1.User);
    const savedUser = yield userRepository.save(user);
    return res.json(savedUser);
}));
routes.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userRepository = yield dbConnection_1.getRepository(User_1.User);
    const user = yield userRepository.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    console.log(user);
    if (!user) {
        res.status(400).send('Wrong credentials');
    }
    return res.json(user);
}));
routes.get('/vacancy/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get('https://api.rabota.ua/vacancy/search', {
        params: req.query,
    });
    let jobRepository = yield dbConnection_1.getRepository(Job_1.Job);
    jobRepository.save(result.data.documents);
    return res.json(result.data);
}));
routes.get('/vacancy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.default.get('https://api.rabota.ua/vacancy', {
        params: req.query,
    });
    let jobDetailsRepository = yield dbConnection_1.getRepository(JobDetails_1.JobDetails);
    jobDetailsRepository.save(result.data);
    return res.json(result.data);
}));
exports.default = routes;
//# sourceMappingURL=routes.js.map