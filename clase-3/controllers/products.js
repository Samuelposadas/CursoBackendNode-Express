const Product = require("../models/Product");

const find = async (_id = null) => {
  try {
    if (_id) return await Product.findById(_id);
    return await Product.find();
  } catch (error) {
    console.error(error);
  }
};
const single = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await find(id);
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

const all = async (req, res) => {
  try {
    const data = await find();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { all, single };
