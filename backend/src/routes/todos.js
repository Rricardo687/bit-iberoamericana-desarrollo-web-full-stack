const express = require('express');
const router = express.Router();
const todoSchema = require('../models/todos');


 //* CRUD

 router.post('/todos', (request, response) => {
    response.send('crear una tarea');
  });


  router.get('/todos', (request, response) => {
    response.send('leer todas las tareas');
  });

  router.get('/todos/:id', (request, response) => {
    response.send('leer una tarea especifica');
  });

  router.put('/todos/:id', (request, response) => {
    response.send('actualizar una tarea especifica');
  });
  
  router.delete('/todos/:id', (request, response) => {
    response.send('eliminar una tarea especifica');
  });

  module.exports = router;