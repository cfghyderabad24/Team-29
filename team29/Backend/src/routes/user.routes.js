import { Router } from "express";
import {registerUser,getUsers,deleteUser} from "../controllers/user.controllers.js";

const router=Router()

router.route("/register").post(registerUser)

// Add this route in user.routes.js

router.route("/").get(getUsers);
router.route("/:id").delete(deleteUser);

export default router