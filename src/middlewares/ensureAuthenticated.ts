import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
const authConfig = require("../configs/auth.json");

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();
    }
    const parts = authToken.split(" ");
    if(!(parts.length === 2)){
        return res.status(401).json({error: "Token error"});
    }
    const [, token] = parts;
    verify(token, authConfig.secret, (err: any, decoded: any)=>{
        if(err){
            return res.status(401).json({error: "Token invalid"});
        }
        req.user_id = decoded.id;
        return next();
    });
}