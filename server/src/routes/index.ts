import { Router } from "express";
import { addGroups, getGroups, updateGroups, deleteGroups } from "../controllers/Group";


const router: Router = Router()

router.get("/getGroups", getGroups)

router.post("/addGroup", addGroups)

router.put("/updateGroup/:id", updateGroups)

router.delete("/deleteGroup/:id", deleteGroups)

export default router