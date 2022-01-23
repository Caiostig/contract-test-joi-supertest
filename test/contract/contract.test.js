require("dotenv").config()
const request = require('supertest')
const Joi = require('joi')

const baseURL = process.env.API_CEP || "";
const schema = require('./schema');

describe('Contract Test', () => {

    it('Contract validation', async () => {
     const res = 
        await request(baseURL)
        .get('/ws/01030000/json')
        .expect(200)
        .expect('Content-Type', /json/)
            Joi.attempt(res.body, schema.getObj, 'Contrato está quebrado')
        });
    });