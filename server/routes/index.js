const express = require('express')
const router = express.Router()

//Controladores
const nostrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const mostrarTestimonios = require('../controllers/testimonialesController')

module.exports = function(){
    router.get('/', homeController.consultasHomePage)

    router.get('/nosotros', nostrosController.infoNosotros)

    router.get('/viajes', viajesController.mostrarViajes)

    router.get('/viajes/:id', viajesController.mostrarViaje)

    router.get('/testimoniales', mostrarTestimonios.mostrarTestimoniales)

    router.post('/testimoniales', mostrarTestimonios.agregarTestimonio)

    return router 
}