const { Router } = require("express");

const router = Router();

const { create, auth } = require("../controllers/auth");

router.post("/", create);
router.post("/login", auth);

module.exports = router;
