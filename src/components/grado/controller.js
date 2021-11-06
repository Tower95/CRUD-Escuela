'use strict'
const router = require('express').Router();
const Grado = require('./dal');

router.get('/', async (req, res) => {
  let payload = undefined;
  payload = await Grado.getAll();

  res.json(payload)
});

router.get('/:id', async (req, res) => {
  let payload = undefined;
  const id = req.params.id;
  payload = await Grado.getbyId(Number(id));

  res.json(payload)
});

router.post('/', async (req, res) => {
  let payload = undefined;
  let grado = {
    nombre: req.body.nombre,
    ProfesorId: Number(req.body.ProfesorId),
  }
  payload = await Grado.save(grado);
  res.json(payload)
});

router.put('/:id', async (req, res) => {
  let payload = undefined;
  const id = Number(req.params.id);
  let grado = {
    id,
    nombre: req.body.nombre,
    ProfesorId: Number(req.body.ProfesorId),
  }
  payload = await Grado.updateById(grado);
  res.json(payload);
});

router.delete('/:id', async (req, res) => {
  let payload = undefined;
  const id = req.params.id;
  payload = await Grado.deleteById(Number(id));
  res.json(payload);
});

module.exports = router;
