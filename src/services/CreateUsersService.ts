import db from "../database/connection";
import { BycriptPassword } from "../utils/BycriptPassword";
import { Compare } from "../utils/Compare";

interface ICreateClientsService{
    name: string;
    email: string;
    password: string;
}

class CreateUsersService{
    async execute({ email, name, password }: ICreateClientsService){
        const bycriptPassword = new BycriptPassword();
        const trx = await db.transaction();
        if(await Compare("users", "name", name)){
            throw new Error("User already exists");
        }
        const newpassword = await bycriptPassword.crypt(password);
        await trx("users").insert({ name, email, password: newpassword });
        await trx.commit();
    }
}

export { CreateUsersService };