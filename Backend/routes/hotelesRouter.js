module.exports = (function () {
  'use strict';
  var hotelesRouter = require('express').Router();

  // Importamos controllers requeridos.
  var hoteles_controller = require('../controllers/hotelesController');



  // solicitud get para lista de hoteles.
  hotelesRouter.get('/hoteles', hoteles_controller.hotel_lista);

  // solicitud get para un solo hotel por id.
  hotelesRouter.get('/hotelesRou/:id', hoteles_controller.hotel_detalle);

  // solicitud POST para la creacion de un hotel.
  hotelesRouter.post('/hoteles', hoteles_controller.hotel_nuevo);

  // solicitud Delete para eliminacion de un hotel.
  hotelesRouter.delete('/hoteles/:id', hoteles_controller.hotel_eliminacion);

  // solicitu Put para actualizacion de un hotel.
  hotelesRouter.put('/hoteles', hoteles_controller.hotel_actualizacion);


  return hotelesRouter;
})();