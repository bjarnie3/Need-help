var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {title: "My name is Bjarni"})
})

router.get("/health", (req, res) => {
  res.send("Server Working")
})

module.exports = router
