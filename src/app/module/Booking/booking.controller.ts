import { tryCatchWrapper } from "../../utills/tryCatchWrapper"
import { BookingServices } from "./booking.service"

const createBoookingCOntroller = tryCatchWrapper(
    async (req, res) => {
     
        const result = await BookingServices.createBookingDB(req.body,req.user.id)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Car booked  successfully",
            data: result
        })
    }
)
const getALLBoookingCOntroller = tryCatchWrapper(
    async (req, res) => {
     
        const result = await BookingServices.getAllBookingsfromDB()
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Bookings retrieved successfully",
            data: result
        })
    }
)




export const BookingController ={
    createBoookingCOntroller,
    getALLBoookingCOntroller,
}
