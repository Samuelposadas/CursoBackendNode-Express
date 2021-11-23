const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const productsRouter = require("./routes/products");

const app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.sendStatus(404);
});

// error handler
app.use(function (err, _, res, _) {
  console.error(err); // log de forever
  res.sendStatus(500);
});

module.exports = app;
