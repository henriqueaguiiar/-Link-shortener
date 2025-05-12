export default class Link {
  readonly identificador: string;
  public url: string;
  public visitas: number;

  constructor(identificador: string, url: string) {
    this.identificador = identificador;
    this.url = url;
    this.visitas = 0;
  }
}
