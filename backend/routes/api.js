const express = require('express');
const router = express.Router();
const parser = require('../parsingKorean');

router.post('/translate', (req, res) => {
  parser(req.body.words, true, res)
})


module.exports = router;
