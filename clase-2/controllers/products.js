const { getAll } = require("../models/products");

const all = (req, res) => {
  const productos = getAll();
  res.json(productos);
};

const create = (req, res) => {
  const {
    id,
    title,
    price,
    available_quantity,
    condition,
    description,
    warranty,
  } = req.body;

  const transformed = {
    title,
    condition,
    description,
  };

  res
    .status(201)
    .json({ message: "se creo el producto", product: transformed });
};

const find = (req, res) => {
  const { id } = req.params;

  const filtered = products.find((product) => product.id == id);
  res.json(filtered);
};

module.exports = { all, create, find };
