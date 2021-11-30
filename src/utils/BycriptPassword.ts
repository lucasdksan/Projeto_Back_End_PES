import bcrypt from "bcryptjs";

class BycriptPassword{
    async crypt(password: string){
        const hash = bcrypt.hashSync(password, 10);
        return hash;
    }
    async comparePassword(password: string, key: string){
        const compared = await bcrypt.compare(password, key);
        return compared;
    }
}

export { BycriptPassword };