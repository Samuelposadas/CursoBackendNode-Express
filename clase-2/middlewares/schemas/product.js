const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    title: Joi.string()
      .required()
      .messages({ "any.required": "el titulo es requerido" }),
    price: Joi.number().integer().positive().required().messages({
      "any.required": "el precio es requerido",
    }),
    available_quantity: Joi.number()
      .required()
      .messages({ "any.required": "el stock es requerido" }),
    description: Joi.string()
      .min(5)
      .max(20)
      .required()
      .messages({ "any.required": "la description es requerido" }),
    condition: Joi.string()
      .required()
      .messages({ "any.required": "la condicion es requerido" }),
    warranty: Joi.string()
      .required()
      .messages({ "any.required": "la garantia es requerido" }),
  }),
  update: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    title: Joi.string().required(),
    price: Joi.number().integer().positive().required(),
    available_quantity: Joi.number().required(),
    description: Joi.string().min(5).max(20).required(),
    condition: Joi.string().required(),
    warranty: Joi.string().required(),
  }),
};

module.exports = schemas;
