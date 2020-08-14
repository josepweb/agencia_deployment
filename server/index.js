//Importar express
const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const routes = require('./routes')

const configs = require('./config')


// bd.authenticate()
//     .then( () => console.log('DB Conectada'))
//     .catch( error => console.log(error))

//configrar express
const app = express()

//Habilitar pug 
app.set('view engine', 'pug')

//Añadir las vistas
app.set('views',path.join(__dirname, './views'))

//cargar una carpeta estatica llamada public
app.use(express.static('public'))

//Validar si estamos en desarrollo o produccion
const config = configs[app.get('env')]

//Crearmos la variable para el sitio web
app.locals.titulo = config.nombreSitio

//Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    //Crear una nueva fecha
    const fecha = new Date()
    res.locals.fechaActual = fecha.getFullYear()
    res.locals.ruta = req.path
    console.log(res.locals)
    return next()
})

//cargar las rutas 
app.use(bodyParse.urlencoded({extended: true}))

//cargar las rutas
app.use('/', routes())

//Puertos y host para la app
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000


app.listen(port, host, () => {
    console.log('El servidor esta funcionando')
})