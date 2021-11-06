'use strict'
const router = require('express').Router();
const Alumno = require('./dal');

router.get('/', async (req,res) =>{
  let payload = undefined;
  payload = await Alumno.getAll();

  res.json(payload)
});

router.get('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  payload = await Alumno.getbyId(Number(id));

  res.json(payload)
});

router.post('/', async (req,res) =>{
  let payload = undefined;
  let alumno = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Genero: req.body.genero,
    FechaNacimiento: new Date(req.body.FechaNacimiento)
  }
  payload = await Alumno.save(alumno);
  res.json(payload)
});

router.put('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  let alumno = {
    id: Number(id),
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    Genero: req.body.genero,
    FechaNacimiento: new Date(req.body.FechaNacimiento)
  }
  payload = await Alumno.updateById(alumno);
  res.json(payload);
});

router.delete('/:id', async (req,res) =>{
  let payload = undefined;
  const id = req.params.id;
  payload = await Alumno.deleteById(id);
  res.json(payload);
  
});

module.exports = router;
