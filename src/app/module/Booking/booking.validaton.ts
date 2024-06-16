import { z } from "zod";

const CreateBookingvzodschema =z.object({
    body:z.object({
        date:z.date(),
        user:z.string().optional(),
        car:z.string(),
        startTime:z.string(),
        endTime:z.string().optional(),
        totalCost:z.number().optional()

    })
})



export const BookingValidations = {
    CreateBookingvzodschema
}