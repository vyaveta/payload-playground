import {z} from "zod";

export const authCredentialsSchema = z.object({
    email: z.string().email("enter a valid email"),
    password: z.string().min(6, {message: "password must be greater than 6 characters"})
})

export type TAuthCredentialsSchema = z.infer<typeof authCredentialsSchema>