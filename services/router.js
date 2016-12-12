var router = require('express').Router();

function protected(req, res, next) {
  res.send("Here's the secret!");
}

router.route('/protected')
.get(protected);


module.exports = router;
