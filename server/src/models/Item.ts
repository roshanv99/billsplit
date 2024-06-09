import { model, Schema } from "mongoose";
import { MemberSchema } from "./Member";
import { IItem } from "../types/Item";

export const ItemSchema: Schema = new Schema(
    {
        name : {
            type: String,
            required: true
        }, 
        price : {
            type: Number,
            required: true
        }, 
        date : {
            type: Date,
            required: true
        }, 
        consumers : {
            type: [ MemberSchema ],
            required: false
        }, 
    }, 
    { timestamps: true }
)


export default model<IItem>("Item", ItemSchema);
