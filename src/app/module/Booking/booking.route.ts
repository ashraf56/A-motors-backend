import { Router } from "express"
import { BookingController } from "./booking.controller"


const router = Router()

router.post('/book-car',BookingController.createBoookingCOntroller)


export const BookingRoute= router