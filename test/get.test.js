require("dotenv").config()
const request = require('supertest');
const baseURL = process.env.API_CEP || "";

describe("GET /public", () => {

  it('deve retornar 200 ao procurar um cep válido', () => {

    return request(baseURL)  
    .get('/ws/01030000/json')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
      expect(response.body.logradouro).toEqual('Rua Florêncio de Abreu')
      expect(response.body.bairro).toEqual('Centro')
      expect(response.body.localidade).toEqual('São Paulo')
      expect(response.body.ddd).toEqual("11")
    });
  });

  it('deve retornar 200 ao procurar um CEP válido - validação via JSON', () => {

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
    return request(baseURL)  
      .get('/ws/01030000/json')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(data)
    });
  });

  it('Deve retornar erro ao enviar CEP válidos porém inexistente', () => {

    return request(baseURL)  
      .get('/ws/12121333/json')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body.erro).toEqual(true)
    });
  });

  it('Deve retornar 400 ao enviar CEP inválido com mais números que o permitido', () => {

    return request(baseURL)  
      .get('/ws/04199950060/json')
      .set('Accept', 'application/json')
      .expect(400)
      .then(response => {
        expect(response.type).toEqual('text/html');
    });
  });

  it('Deve retornar 404 ao alterar o a rota de busca de CEPs', () => {

    return request(baseURL)  
      .get('/rw/01030000/jso')
      .set('Accept', 'application/json')
      .expect(404)
      .then(response => {
        expect(response.type).toEqual('text/html');
    });
  });

});