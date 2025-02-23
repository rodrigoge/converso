import express from 'express'
import { userController } from './controllers/userController'
import dotenv from "dotenv";

const routes = express.Router();
dotenv.config();

const baseUrl = process.env.BASE_URL
routes.post(`${baseUrl}/users`, userController.createUser)

module.exports = routes
