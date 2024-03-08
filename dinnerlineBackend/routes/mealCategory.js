const express = require('express');
const router = express.Router();
const mealCategories = require('../services/mealCategory');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await mealCategories.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

/* GET id */
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await mealCategories.getOne(req.params.id));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

/* POST */
router.post('/', async function(req, res, next) {
    try {
      res.json(await mealCategories.create(req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });


/* PUT */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await mealCategories.update(req.params.id, req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });

/* DELETE */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await mealCategories.remove(req.params.id));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
});
module.exports = router;