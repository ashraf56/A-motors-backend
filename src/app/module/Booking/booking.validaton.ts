import { z } from "zod";

const CreateBookingvzodschema =z.object({
    body:z.object({
        date:z.date(),
        user:z.string(),
        car:z.string(),
        startTime:z.string(),
        endTime:z.string(),
        totalCost:z.number()

    })
})



export const BookingValidations = {
    CreateBookingvzodschema
}