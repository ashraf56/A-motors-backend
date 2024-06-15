import { z } from "zod";

const createUservalidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        role: z.string().default('user'),
        password: z.string({ invalid_type_error: 'password must be string' }).max(8),
        phone: z.string(),
        adress: z.string()
    })


})



export const UserValidations = {
    createUservalidationSchema
}