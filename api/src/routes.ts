import express from 'express'
import { userController } from './controllers/userController'
import { otpController } from './controllers/otpController'
import dotenv from "dotenv";

dotenv.config();
const baseUrl = process.env.BASE_URL

const router = express.Router()

router.post(`${baseUrl}/users`, userController.createUser)
router.post(`${baseUrl}/login`, userController.login)
router.post(`${baseUrl}/send-otp`, otpController.generateOTP)
router.post(`${baseUrl}/validate-otp`, otpController.validateOTP)

export default router
