import Joi from "joi";
import { schema } from "../utils/schema";

export const registerSchema = Joi.object({
    firstName : schema.firstName,
    lastName : schema.lastName,
    email : schema.email,
    password : schema.password
})

export const loginSchema = Joi.object({
    email : schema.email,
    password : schema.logPassword
})

export const updateSchema = Joi.object({
    name : schema.nameUpdate,
    email : schema.emailUpdate,
    age : schema.ageUpdate
})