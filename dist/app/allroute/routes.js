"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Allroute = [
    {
        path: '/',
    }
];
Allroute.forEach(r => router.use(r.path));
exports.default = router;
