const Viaje = require('../Modelos/Viajes')
const Testimonial = require('../Modelos/Testimoniales')

exports.consultasHomePage = async (req, res)=> {
   
    const viajes = await Viaje.findAll({limit: 3})
    const testimoniales = await Testimonial.findAll({limit: 3})

    res.render('index',{
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales 
    })
}