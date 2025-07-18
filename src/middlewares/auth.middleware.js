import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    // request has access of cookies so we can access them here

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user) {
            // TODO discuss about frontend
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
        
    }
})