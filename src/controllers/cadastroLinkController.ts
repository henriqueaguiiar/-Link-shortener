import { Request, Response } from "express";
import { adicionarDados, lerDados } from "../utils/arquivos";
import Link from "../models/Link";

export default class CadastroLink {
  async controlador(req: Request, res: Response) {
    const { identificador, url } = req.body;

    if (!identificador || !url) {
      return res
        .status(400)
        .json({ message: "Identificador e URL são obrigatórios" });
    }
    if (typeof identificador !== "string" || typeof url !== "string") {
      return res
        .status(400)
        .json({ message: "Identificador e URL devem ser strings" });
    }
    const dados = await lerDados();

    const linkExistente = dados.find((link) => {
      return link.identificador === identificador;
    });

    if (linkExistente) {
      return res.status(400).json({ message: "Link já cadastrado" });
    }
    const novoLink = new Link(identificador, url);
    await adicionarDados(novoLink);
    return res.status(201).json(novoLink);
  }
}
