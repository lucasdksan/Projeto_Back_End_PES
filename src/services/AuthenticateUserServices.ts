import db from "../database/connection";
import { BycriptPassword } from "../utils/BycriptPassword";
import clientView from "../views/ClientView";
import GenerateToken from "../utils/TokenGenerate";

interface IAuthenticateUserServices{
    email: string;
    password: string;
}

class AuthenticateUserServices{
    async execute({ email, password }: IAuthenticateUserServices){
        const bycript = new BycriptPassword();
        const user = await db("users").where("users.email", "=", String(email)).first();
        const find = await bycript.comparePassword(password, user.password);
        const clientUser = clientView.render(user);
        if(find){
            return {clientUser, token: GenerateToken(user.id)};
        } else{
            throw new Error("Invalid email/password");
        }
    }
}

export { AuthenticateUserServices };