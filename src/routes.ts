import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateController } from "./controllers/AuthenticateController";
import { CreateUsersController } from "./controllers/CreateUsersController";

const authenticateController = new AuthenticateController();
const createUsersController = new CreateUsersController();

const routes = Router();

routes.post("/authenticate", authenticateController.handle);
routes.post("/create/clients", createUsersController.create);

export { routes };