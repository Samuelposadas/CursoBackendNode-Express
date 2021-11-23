const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available_quantity: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    default: "new",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  warranty: {
    type: String,
    required: true,
  },
  ts_create: {
    type: Date,
    default: Date.now,
  },
  ts_update: {
    type: Date,
    default: Date.now,
  },
  enable: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("products", ProductSchema);
