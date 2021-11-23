const { Schema, model } = require("mongoose");

const PurchaseSchema = Schema({
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
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
  enaible: {
    type: Boolean,
    default: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("purchases", PurchaseSchema);
