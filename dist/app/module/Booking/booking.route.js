"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoute = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
router.post('/book-car', booking_controller_1.BookingController.createBoookingCOntroller);
exports.BookingRoute = router;
