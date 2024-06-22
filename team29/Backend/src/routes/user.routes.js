import { Router } from "express";
import {registerUser,getUsers} from "../controllers/user.controllers.js";

const router=Router()

router.route("/register").post(registerUser)

// Add this route in user.routes.js

router.route("/").get(getUsers);


export default router