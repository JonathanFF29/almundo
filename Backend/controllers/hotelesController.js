var hoteles = require('../servicios/hoteles'); // CRUD en el Api de los hoteles
var where = require("lodash.where");  // funcionalidad para hacer filtrado 

// para la lista de los hoteles
exports.hotel_lista = function(req, res) {
    res.send('metodo lista');
};

// Detalle de un hotele en especifico.
exports.hotel_detalle = function(req, res) {
    console.log('ingreso router 2', JSON.stringify(req.body));
    var itemId = req.params.id;
    var hotel = where(hoteles, { "id": itemId });
    if (!hotel) {
        res.send(404);
    } else {
        res.send('detalle hotel: ' + JSON.stringify(hotel));
    }
    
};


// Creacion de un hotel nuevo
exports.hotel_nuevo = function(req, res) {
    res.send('Hotel creado');
};


// Eliminacion de un hotel.
exports.hotel_eliminacion = function(req, res) {
    res.send('Hotel eliminado');
};


// Actualizacion de un hotel.
exports.hotel_actualizacion = function(req, res) {
    res.send('Hotel actualizado');
};