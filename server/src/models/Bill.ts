import { model, Schema } from "mongoose";
import { ItemSchema } from "./Item";
import { IBill } from "../types/Bill";

export const BillSchema: Schema = new Schema(
    {
        total_amount : {
            type: Number,
            required: true
        }, 
        items : {
            type: [ItemSchema],
            required: true
        }, 
        discount : {
            type: Number,
            required: false
        }, 
        tax_component : {
            type: Number,
            required: false
        }, 
    }, 
    { timestamps: true }
)


export default model<IBill>("Bill", BillSchema);
