import { VentasServiceMongo } from './src/module/Ventas/services/ventas.mongo.service';
import express, { Application } from 'express';
import cors from 'cors'
import { connectToMongo } from './src/config/database';
import { configDotenv } from 'dotenv';
import { startProductoRouter } from './src/module/Productos/productos.routes';
import { ProductoServiceMongo } from './src/module/Productos/services/producto.mongo.service';
import { ClientesServiceMongo } from './src/module/Clientes/services/cliente.mongo.service';
import { iniciarClienteRouter } from './src/module/Clientes/clientes.routes';
import { iniciarVentasRouter } from './src/module/Ventas/ventas.routes';
export function startServer () {
    // instancia de express
    const app: Application = express();
    configDotenv();
    // middlewares
    app.use(cors())
    app.use(express.json());

    // rutas
    app.use('/api/productos', startProductoRouter(new ProductoServiceMongo()));
    app.use('/api/clientes', iniciarClienteRouter(new ClientesServiceMongo()));
    app.use('/api/ventas',  iniciarVentasRouter(new VentasServiceMongo()));


    // levantar el servidor
    app.listen(3000, () => {
        // Conectarse a la base de datos

        // * MongoDB
        connectToMongo();

        // mensaje de éxito
        console.log('Server is running on port 3000');
    });

    return app;
}
