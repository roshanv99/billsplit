import { Request, Response } from "express";
import { IGroup } from "../../types/Group";
import Group from "../../models/Group.";

const getGroups = async (req: Request, res: Response): Promise<void> => {
    try {
        const groups:IGroup[] = await Group.find();
        res.status(200).json({ groups })
    } catch (error) {
        console.error("Failed to fetch Groups | Controller : ",error);
        throw error;
    }
}

const addGroups = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IGroup, "name" | "description" | "items" | "members" >
      console.log("addTodo | body: ", body);
      const group: IGroup = new Group({
          name: body.name,
          description: body.description,
          items: body.items,
          members: body.members,
      })

      const newGroup: IGroup = await group.save()
      const allGroups: IGroup[] = await Group.find()

      res
      .status(201)
      .json({ message: "New Group created!", group: newGroup, groups: allGroups })
    } 
    catch (error) {
      res
        .status(500)
        .json({ message: "Something went wrong. Please try again later", error:error })
        throw error
    }
}

const updateGroups = async (req: Request, res: Response): Promise<void> => {
    try {
      const {params: { id }, body} = req
      const updateGroup: IGroup | null = await Group.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allGroups: IGroup[] = await Group.find()
      res.status(200).json({
        message: "Group updated",
        group: updateGroup,
        groups: allGroups,
      })
    } catch (error) {
      throw error
    }
}

const deleteGroups = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedgroup: IGroup | null = await Group.findByIdAndDelete(req.params.id)
      const allGroups: IGroup[] = await Group.find()
      res.status(200).json({
        message: "Todo deleted",
        group: deletedgroup,
        groups: allGroups,
      })
    } catch (error) {
      throw error
    }
  }

  export { addGroups, getGroups, updateGroups, deleteGroups}