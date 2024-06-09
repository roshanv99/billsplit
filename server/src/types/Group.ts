import { Document } from "mongoose"
import { IUser } from '../types/User';
import { IItem } from '../types/Item';

export interface IGroup extends Document {
    id: number;
    name: string;
    description: string;
    items:IItem[];
    members: IUser[];
  }