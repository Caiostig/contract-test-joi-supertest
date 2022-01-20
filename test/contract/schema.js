const Joi = require('joi')

const nome = () => {

const schema_viacep = Joi.object().keys({
  cep: Joi.string(),
  logradouro: Joi.string(),
  complemento: Joi.string().allow(''),
  bairro: Joi.string(),
  localidade: Joi.string(),
  uf: Joi.string(),
  ibge: Joi.string(),
  gia: Joi.string(),
  ddd: Joi.string(),
  siafi: Joi.string()
});

return {schema_viacep}
}

module.exports = nome