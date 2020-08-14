const Viaje = require('../Modelos/Viajes')

exports.mostrarViajes = async (req, res)=> {
    const viajes = await Viaje.findAll()
        res.render('viajes',{
            pagina: 'Proximos Viajes',
            viajes
        })
}

exports.mostrarViaje = async (req, res)=> {
    const viajes = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
}