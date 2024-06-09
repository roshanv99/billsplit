import { IUser } from '../types/User';
import { Document } from "mongoose"

export interface IItem extends Document {
    name:string;
    price:number;
    date:Date;
    consumers:IUser[];
}