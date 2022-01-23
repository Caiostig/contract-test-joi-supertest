require("dotenv").config()
const request = require('supertest');
const baseURL = process.env.API_CEP || "";

describe("POST /public", () => {

  it('deve retornar 403 ao tentar inserir um recurso', async () => {

    const res = await request(baseURL)  
      .post('/ws/01030000/json')
      .set('Accept', 'application/json')
      .expect(403)
        expect(res.type).toEqual('text/html')
        expect(res.charset).toEqual('utf-8');
  });
});