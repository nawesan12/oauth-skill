const { Router } = require("express");
const { isAuthorized } = require("../utils/auth");
const router = Router();

router.get("/", isAuthorized, (req, res) => {
  res.json(req.user.guilds);
});

router.get("/settings", isAuthorized, (req, res) => {
  res.send(200);
});

module.exports = router;
