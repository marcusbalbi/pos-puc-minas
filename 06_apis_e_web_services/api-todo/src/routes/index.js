const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("oi!");
});

module.exports = router;
