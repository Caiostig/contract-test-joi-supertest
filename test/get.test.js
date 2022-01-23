require("dotenv").config()
const request = require('supertest');
const baseURL = process.env.API_CEP || "";

describe("GET /public", () => {

  it('deve retornar CEP válido', async () => {

    const res = await request(baseURL)  
    .get('/ws/01030000/json')
    .set('Accept', 'application/json')
    .expect(200)
      expect(res.body.logradouro).toEqual('Rua Florêncio de Abreu')
      expect(res.body.bairro).toEqual('Centro')
      expect(res.body.localidade).toEqual('São Paulo')
      expect(res.body.ddd).toEqual("11");
  });

  it('deve retornar CEP válido - via JSON', async () => {

    let data = {
      cep: "01030-000",
      logradouro: "Rua Florêncio de Abreu",
      complemento: "até 398 - lado par",
      bairro: "Centro",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107"
    };
      const res = await request(baseURL)
      .get('/ws/01030000/json')
      .set('Accept', 'application/json')
      .expect(200)
        expect(res.body).toEqual(data);
  });

  it('Deve retornar erro ao enviar CEP válido inexistente', async () => {

    const res = await request(baseURL)  
      .get('/ws/12121333/json')
      .set('Accept', 'application/json')
      .expect(200)
        expect(res.body.erro).toEqual(true);
  });

  it('Deve retornar 400 ao enviar CEP inválido com mais números que o permitido', async () => {

    const res = await request(baseURL)  
      .get('/ws/04199950060/json')
      .set('Accept', 'application/json')
      .expect(400)
        expect(res.type).toEqual('text/html');
  });

  it('Deve retornar 404 ao alterar o a rota de busca de CEPs', async () => {

    const res = await request(baseURL)  
      .get('/rw/01030000/jso')
      .set('Accept', 'application/json')
      .expect(404)
        expect(res.type).toEqual('text/html');
  });

});