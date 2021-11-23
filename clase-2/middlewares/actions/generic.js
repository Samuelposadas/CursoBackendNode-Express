const schema = require("../schemas/generic");

const validateIdParams = (req, res, next) => {
  const { value } = schema.validateId.validate(+req.params.id);
  value === isNaN ? res.sendStatus(404) : next();
};

module.exports = { validateIdParams };
