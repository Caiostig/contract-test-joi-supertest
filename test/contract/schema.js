const Joi = require('joi')

const getObj = Joi.object().keys({
  cep: Joi.string().min(9).required(),
  logradouro: Joi.string(),
  complemento: Joi.string().optional(''),
  bairro: Joi.string(),
  localidade: Joi.string(),
  uf: Joi.string().min(2),
  ibge: Joi.string(),
  gia: Joi.string().min(4),
  ddd: Joi.string().min(2),
  siafi: Joi.string().min(4)
});

module.exports = { getObj }