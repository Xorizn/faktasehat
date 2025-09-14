//server
__path = process.cwd()
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ mess: "no yet here"})
})

module.exports = router
