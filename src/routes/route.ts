import { Router } from "express";
import CadastroLink from "../controllers/CadastroLinkController";
import ObterLink from "../controllers/ObterLinkController";

const route = Router();

route.post("/", new CadastroLink().controlador);
route.get("/:identificador", new ObterLink().controlador);

export default route;
