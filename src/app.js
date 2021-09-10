const express = require('express');
const app = express();
const main =require('./routers/main.js');
app.use(express.static('public'))

const PORT = 3030;

app.use('/', main);



app.listen(PORT ,() => console.log('servidor corriendo en http://localhost:' + PORT));