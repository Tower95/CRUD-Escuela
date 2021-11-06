'use strict'
const router = require('express').Router();
const Profesor = require('./dal');

router.get('/', async (req,res) =>{
  let payload = undefined;
  payload = await Profesor.getAll();

  res.json(payload)
});

router.get('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  payload = await Profesor.getbyId(Number(id));

  res.json(payload)
});

router.post('/', async (req,res) =>{
  let payload = undefined;
  let profesor = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Genero: req.body.genero
  }
  payload = await Profesor.save(profesor);
  res.json(payload)
});

router.put('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  let profesor = {
    id: Number(id),
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Genero: req.body.Genero
  }
  payload = await Profesor.updateById(profesor);
  res.json(payload);
});

router.delete('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  payload = await Profesor.deleteById(Number(id));
  res.json(payload);
});

module.exports = router;
