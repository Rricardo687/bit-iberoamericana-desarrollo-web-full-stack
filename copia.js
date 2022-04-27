 //* CRUD

 server.post('/api/v1/todos', (request, response) => {
    response.send('crear una tarea');
  });


  server.get('/api/v1/todos', (request, response) => {
    response.send('leer todas las tareas');
  });

  server.get('/api/v1/todos/:id', (request, response) => {
    response.send('leer una tarea especifica');
  });

  server.put('/api/v1/todos/:id', (request, response) => {
    response.send('actualizar una tarea especifica');
  });
  
  server.delete('/api/v1/todos/:id', (request, response) => {
    response.send('eliminar una tarea especifica');
  });
