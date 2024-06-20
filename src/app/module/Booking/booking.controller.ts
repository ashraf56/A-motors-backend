import { tryCatchWrapper } from "../../utills/tryCatchWrapper"
import { BookingServices } from "./booking.service"

const createBoookingCOntroller = tryCatchWrapper(
    async (req, res) => {
     
        const result = await BookingServices.createBookingDB(req.body,req.user.id)
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Car booked  successfully",
            data: result
        })
    }
)



export const BookingController ={
    createBoookingCOntroller
}
