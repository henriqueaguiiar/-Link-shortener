import Link from "./Link";

describe("Criação de links", () => {
  test("Deve criar um link com sucesso", () => {
    const link = new Link("cubosacademy", "https://cubosacademy");

    expect(link).toHaveProperty("identificador", "cubosacademy");
    expect(link).toHaveProperty("url", "https://cubosacademy");
    expect(link).toHaveProperty("visitas", 0);
  });
});
