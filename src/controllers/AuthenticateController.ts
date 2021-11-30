import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";

class AuthenticateController {
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        const authenticateUserService = new AuthenticateUserServices();
        try{
            const token = await authenticateUserService.execute({email, password});
            return res.json(token); 
        } catch(err){
            return res.status(405).json({error: "User not found"});
        }
    }
}

export { AuthenticateController };