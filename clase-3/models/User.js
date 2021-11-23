const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  shippingAdress: {
    type: Array,
    default: [],
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
    default: false,
  },
});

module.exports = model("users", UserSchema);
