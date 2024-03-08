const express = require('express');
const router = express.Router();
const users = require('../services/user');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

/* GET id */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await users.getOne(req.params.id));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

/* POST */
router.post('/', async function(req, res, next) {
    try {
      res.json(await users.create(req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });


/* PUT */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await users.update(req.params.id, req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });

/* DELETE */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await users.remove(req.params.id));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
});
module.exports = router;