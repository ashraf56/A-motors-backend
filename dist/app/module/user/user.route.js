"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userroute = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.post('/signup', user_controller_1.UserCOntrollers.CreateUserController);
exports.Userroute = router;
