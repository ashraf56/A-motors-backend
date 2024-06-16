import { Router } from "express"
import { BookingController } from "./booking.controller"
import validateRequest from "../../middleware/validateRequest"
import { BookingValidations } from "./booking.validaton"


const router = Router()

router.post('/book-car', validateRequest(BookingValidations.CreateBookingvzodschema), BookingController.createBoookingCOntroller)


export const BookingRoute = router