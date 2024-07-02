 // dist/app.js

const express = require('express');
const { debounce } = require('./debounce'); // Importa la función debounce desde tu archivo

const app = express();
const port = process.env.PORT || 3000;

// Ruta de ejemplo para probar la función debounce
app.get('/', (req, res) => {
  const debouncedFunc = debounce(() => {
    res.send('Función debounced ejecutada');
  }, 1000);

  debouncedFunc();
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
