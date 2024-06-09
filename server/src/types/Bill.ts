import { IItem } from "./Item";
import { Document } from "mongoose"

export interface IBill extends Document{
    total_amount: number;
    items:IItem[],
    discount:number
    tax_component:number; //Gets divided based on the consumption percentage
}