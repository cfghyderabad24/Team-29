import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Users} from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // create user object - create entry in db
    // return res

    const {name, age, gender, 
        twelve, income, father_name, 
        father_occ, mother_name, mother_occ, 
        edu_stream, college_name, college_id, 
        college_fee, grad, add, ph} = req.body
    //console.log("email: ", email);

    if (
        [name, age, gender, 
            twelve, income, father_name, 
            father_occ, mother_name, mother_occ, 
            edu_stream, college_name, college_id, 
            college_fee, grad, add, ph].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await Users.create({
        name, age, gender, 
        twelve, income, father_name, 
        father_occ, mother_name, mother_occ, 
        edu_stream, college_name, college_id, 
        college_fee, grad, add, ph
    })

    return res.status(201).json(
        new ApiResponse(200,user, "User registered Successfully")
    )

})

export {registerUser}