import { Router } from "express";
import CadastroLink from "../controllers/cadastroLinkController";

const route = Router();

route.post("/", new CadastroLink().controlador);
route.get("/:identificador");

export default route;
