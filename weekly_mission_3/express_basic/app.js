//usando objeto express
const express = require('express');

//app de express
const app = express();

//puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000;


//path inicial, repsonderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// respondiendo con un texto
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx');
});

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Victor', msg: 'Hello'};
    res.send(explorer);
});

// query params: recibir parametros por la url
// http://localhost:3000/explorers/victor
// req.params = {"explorerNme":'victor}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});


//inicializamos la app
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});