var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')  // para evitar problemas de consumo
var hoteles = require('./servicios/hoteles'); // CRUD en el Api de los hoteles
var where = require("lodash.where");  // funcionalidad para hacer filtrado 
var config = require('./config');   // archivo con variables de entorno para configuracion de ambientes
var hotelesRouter = require('./routes/hotelesRouter');  //Importamos las routers configuradas para hotel

var entorno = process.argv[2]; //valor para definir entorno donde se ejecutar el Api, esto se realiza desde command line, node server.js des y node server.js prd

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/hoteles', hotelesRouter);
app.use(cors());

// Creacion servidor de desarrollo o produccion segun argumento ingresado
http.createServer(app).listen(config[entorno].app.port, () => {
    if (entorno === "pro") {

        console.log('Servirdor iniciado en produccion http://localhost:8002');
    } else if (entorno === "des") {
        console.log('Servirdor iniciado en desarrollo http://localhost:8001');
    }

});


//Metodo get para obtener los hoteles
app.get('/', function (req, res, next) {
    res.send('Bienvenido a servidor de hoteles.');
});

//Metodo get para obtener los hoteles
app.get('/hoteles', function (req, res, next) {
    if (req.query.filter) {
        next();
        return;
    }
    res.send(hoteles);
});

//Metodo get para obtener los hoteles filtrados 
app.get('/hoteles', function (req, res) {
    var filter = req.query.filter;
    res.send('Fitro' + filter);
});

//Metodo get para obtener los hoteles por id
app.get('/hoteles/:id', function (req, res, next) {
    var itemId = req.params.id;
    var hotel = where(hoteles, { "id": itemId });
    if (!hotel) {
        res.send(404);
    } else {
        res.send(hotel);
    }
});

//Metodo post para guardar nuevo hotel
app.post('/hoteles', function (req, res) {
    var data = req.body;
    hoteles.push(data);
    res.send('Información, se añadio correctamente el id. ' + data);
});

//Metodo put para editar hotel
app.put('/hoteles', function (req, res) {
    var itemId = req.body.id;
    var data = req.body;
    for (var i = 0; i < hoteles.length; i++) {
        if (hoteles[i].id == itemId) {
            hoteles.splice(i, 1);
            break;
        }
    }
    hoteles.push(data);
    res.send('Información, se actualizo correctamente el id. ' + itemId + ' con ' + data);
});

//Metodo para eliminar hotel
app.delete('/hoteles/:id', function (req, res) {
    var itemId = req.params.id;
    for (var i = 0; i < hoteles.length; i++) {
        if (hoteles[i].id == itemId) {
            console.log("id a borrar", hoteles[i].id);
            hoteles.splice(i, 1);
            break;
        }
    }
    res.send('Información, se eliminó correctamente el id. ' + itemId);
});

