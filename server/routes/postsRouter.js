const express = require('express');
const { Post, Restaurant } = require('../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    name, address, about, image,
  } = req.body.input;
  const newPost = await Restaurant.create({
    name, address, about, image,
  });
  res.json(newPost);
});
router.get('/', async (req, res) => {
  const resalt = await Restaurant.findAll();
  res.json(resalt);
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  console.log('TEST:', req.body.input);
  const {
    name, address, about, image,
  } = req.body.input;
  await Restaurant.update({
    name, address, about, image,
  }, { where: { id: req.params.id } });

  const arr = await Restaurant.findAll();
  console.log('MY ARR:', arr);
  res.json(arr);
});

module.exports = router;
