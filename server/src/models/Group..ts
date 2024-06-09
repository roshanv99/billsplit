import { IGroup } from "../types/Group";
import { ItemSchema }  from "./Item";
import { MemberSchema } from "./Member";
import { model, Schema } from "mongoose";

export const GroupSchema: Schema = new Schema(
    {
        name : {
            type: String,
            required: true
        }, 
        description : {
            type: String,
            required: true
        }, 
        items : {
            type: [ ItemSchema ],
            required: false
        }, 
        members : {
            type: [ MemberSchema ],
            required: false
        }, 
    }, 
    { timestamps: true }
)

export default model<IGroup>("Group", GroupSchema);
