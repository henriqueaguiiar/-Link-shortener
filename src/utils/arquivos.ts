import fs from "fs/promises";
import Link from "../models/Link";

const caminhoData = "./src/database.json";

export async function lerDados(): Promise<Link[]> {
  const dados = await fs.readFile(caminhoData);
  const parse = JSON.parse(dados.toString());
  return parse;
}

export async function adicionarDados(link: Link) {
  const dados = await lerDados();
  dados.push(link);
  await fs.writeFile(caminhoData, JSON.stringify(dados, null, "\t"));
}
