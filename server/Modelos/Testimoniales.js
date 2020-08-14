const Sequelize = require('sequelize')

const bd = require('../config/database')

const Testimonial = bd.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

module.exports = Testimonial