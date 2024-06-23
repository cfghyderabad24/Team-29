import { Router } from "express";
<<<<<<< HEAD
import {registerUser,getUsers} from "../controllers/user.controllers.js";
import {registeredUser, getRegisteredUsers} from "../controllers/registerUser.controller.js"
=======
import {registerUser,getUsers,deleteUser} from "../controllers/user.controllers.js";

>>>>>>> origin/main
const router=Router()

router.route("/register").post(registerUser)
router.route("/registered").post(registeredUser)

// Add this route in user.routes.js

router.route("/").get(getUsers);
<<<<<<< HEAD
router.route("/").get(getRegisteredUsers);

=======
router.route("/:id").delete(deleteUser);
>>>>>>> origin/main

export default router