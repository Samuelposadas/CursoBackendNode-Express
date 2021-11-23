const express = require("express");
const router = express.Router();
const { validateCreate } = require("../middlewares/actions/product");
const { validateIdParams } = require("../middlewares/actions/generic");
const { all, create, find } = require("../controllers/products");

router.get("/", all);
router.get("/:id", validateIdParams, find);
router.post("/", validateCreate, create);

module.exports = router;
