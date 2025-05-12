import Link from "./Link";

describe("Criação de links", () => {
  test("Deve criar um link com sucesso", () => {
    const link = new Link("cubosacademy", "https://cubos.academy");

    expect(link).toHaveProperty("identificador", "cubosacademy");
    expect(link).toHaveProperty("url", "https://cubosa.cademy");
    expect(link).toHaveProperty("visitas", 0);
  });
});
