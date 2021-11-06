'use strict'
const router = require('express').Router();
const AlumnoGrado = require('./dal');

router.get('/', async (req, res) => {
  let payload = undefined;
  payload = await AlumnoGrado.getAll();

  res.json(payload)
});

router.get('/:id', async (req, res) => {
  let payload = undefined;
  const id = req.params.id;
  payload = await AlumnoGrado.getbyId(Number(id));

  res.json(payload)
});

router.post('/', async (req, res) => {
  let payload = undefined;
  let alumnogrado = {
    alumnoId: req.body.alumnoId,
    gradoId: req.body.gradoId,
    ProfesorId: req.body.ProfesorId,
    Seccion: req.body.Seccion
  }
  payload = await AlumnoGrado.save(alumnogrado);
  res.json(payload)
});

router.put('/:id', async (req, res) => {
  let payload = undefined;
  const id = Number(req.params.id);
  let alumnogrado = {
    id,
    alumnoId: req.body.alumnoId,
    gradoId: req.body.gradoId,
    ProfesorId: req.body.ProfesorId,
    Seccion: req.body.Seccion
  }
  payload = await AlumnoGrado.updateById(alumnogrado);
  res.json(payload); 
});

router.delete('/:id', async (req, res) => {
  let payload = undefined;
  const id = req.params.id;
  payload = await AlumnoGrado.deleteById(id);
  res.json(payload);

});

module.exports = router;
