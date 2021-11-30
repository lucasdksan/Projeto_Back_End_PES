import { Request, Response } from "express";
import { CreateUsersService } from "../services/CreateUsersService";

class CreateUsersController{
    async create(req: Request, res: Response){
        const { email, name, password } = req.body;
        const createUsersService = new CreateUsersService();
        try{
            await createUsersService.execute({ email, name, password });
            return res.json({message: "User Create!"});
        } catch(err){
            return res.status(406).json({error: "Fail Create User"});
        }
    }
}

export { CreateUsersController };