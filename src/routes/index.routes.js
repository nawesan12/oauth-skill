const { Router } = require("express");
const { isNotAuthorized } = require("../utils/auth");

const router = Router();

router.get("/", isNotAuthorized, (req, res) => res.redirect("/login"));

module.exports = router;
