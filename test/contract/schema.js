const Joi = require('joi')

const cepSchema = () => {

const getObj = Joi.object().keys({
  cep: Joi.string().required(),
  logradouro: Joi.string(),
  complemento: Joi.string().optional(''),
  bairro: Joi.string(),
  localidade: Joi.string(),
  uf: Joi.string(),
  ibge: Joi.string(),
  gia: Joi.string(),
  ddd: Joi.string(),
  siafi: Joi.string()
});

return {getObj}
}

module.exports = cepSchema