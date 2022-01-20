require("dotenv").config()
const request = require('supertest');
const baseURL = process.env.API_CEP || "";

describe("POST /public", () => {

  it('deve retornar 403 ao tentar inserir um recurso', () => {

    return request(baseURL)  
      .post('/ws/01030000/json')
      .set('Accept', 'application/json')
      .expect(403)
      .then(response => {
        expect(response.type).toEqual('text/html');
        expect(response.charset).toEqual('utf-8');
    });

  });

});