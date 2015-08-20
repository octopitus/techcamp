import express from 'express';
import path from 'path';
import http from 'http';

let app = express();

// Externals scripts and styles
app.use('/assets/material.min.css', express.static(path.join(__dirname, '../', 'public', 'material.min.css')));

// This is express boilerplate to make our
// bundled JS available as well as our template
app.use('/assets', express.static(path.join(__dirname, '../', 'dist')));

// Routes
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/views/layout.html');
});

let port = process.env.PORT || 3000;
app.set('port', port);

let server = http.createServer(app);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'? 'Pipe ' + port: 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'? 'pipe ' + addr: 'port ' + addr.port;
  console.log('Server is running on ' + bind);
}