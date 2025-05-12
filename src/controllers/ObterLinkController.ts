import { Request, Response } from "express";
import { contarVisitas, lerDados } from "../utils/arquivos";

export default class ObterLink {
  async controlador(req: Request, res: Response) {
    const { identificador } = req.params;

    if (!identificador) {
      return res.status(400).json({ message: "Identificador é obrigatório" });
    }

    const dados = await lerDados();

    const linkExistente = dados.find((link) => {
      return link.identificador === identificador;
    });

    if (!linkExistente) {
      return res.status(404).json({ message: "Link não existe" });
    }

    await contarVisitas(linkExistente.identificador);

    return res.status(200).json({
      url: linkExistente.url,
      visitas: linkExistente.visitas + 1,
    });
  }
}
