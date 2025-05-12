import { Router } from "express";

const route = Router();

route.post("/");
route.get("/:identificador");

export default route;
