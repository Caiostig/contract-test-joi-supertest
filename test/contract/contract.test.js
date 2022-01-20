require("dotenv").config()
const request = require('supertest')
const Joi = require('joi')

const baseURL = process.env.API_CEP || "";
const schema = require('./schema');

describe('Contract Test API viacep', () => {

    it('Contract validation', async () => {
     const response = await request(baseURL)
        .get('/ws/01030000/json')
        .expect(200)
            const resultado = Joi.attempt(response.body, schema().schema_viacep, 'Contrato está quebrado')
        });
    });