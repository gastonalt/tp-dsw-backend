const bodyParser = require('body-parser');
const tipoInmuebleRoute = require("./routes/tipoInmuebleController")
const localidadRoute = require("./routes/localidadController")
const servicioRoute = require("./routes/servicioController")
var cors = require('cors')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/tipoInmueble', tipoInmuebleRoute);
app.use('/localidad', localidadRoute);
app.use('/servicio', servicioRoute)

app.listen(port, () => {
  console.log(`App corriendo en: ${port}`);
});