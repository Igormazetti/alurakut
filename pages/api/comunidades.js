import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "b9e6c6cb543bc447617194ea1f46a7";
    const client = new SiteClient(TOKEN);

    // Validar os dados antes de cadastrar
    const registroCriado = await client.items.create({
      itemType: "967693", // ID do Model de comunidades criado pelo Datocms
      ...request.body,
      // title: "Comunidade de teste",
      // imageUrl: "http://github.com/Igormazetti.png",
      // creatorSlug: "Igormazetti",
    });

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }
}
