const Joi = require("@hapi/joi");

const schemas = {
  validateId: Joi.number()
    .positive()
    .required()
    .messages({ "any.required": "el id tiene que ser un numero" }),
};

module.exports = schemas;
