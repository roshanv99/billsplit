import { model, Schema } from "mongoose";
import { IUser } from "../types/User";

export const MemberSchema: Schema = new Schema(
    {
        id : {
            type: Number,
            required: true
        }, 
        name : {
            type: String,
            required: true
        }, 
        thumbnail : {
            type: String,
        }, 

    }, 
    { timestamps: true }
)

export default model<IUser>("Member", MemberSchema);
