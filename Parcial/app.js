const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./config/database');
const Products = require('./models/products');
const productsRoutes = require('./routes/productsRoutes');

const app = express();
const port = 3000;

app.use('/products', productsRoutes);

//conexion con la base de datos
(async () => {
    try{
        await sequelize.authenticate();
        console.log('CONEXION CON DB EXITOSA');
    }catch(error){
        console.log('ERROR DE CONEXION CON DB: '+error);
    }
})();

//sincronizacion del modelo de la entidad
(async () => {
    try{
        await sequelize.sync();
        console.log('MODELO SINCRONIZADO EXITOSAMENTE');
    }catch(error){
        console.log('ERROR AL SINCRONIZAR MODELO: '+error);
    }
})();

app.use(express.json());
app.use(morgan());
app.use(cors());

app.listen(port, () => {
    console.log('API CORRIENDO EN EL PUERTO: '+port);
})