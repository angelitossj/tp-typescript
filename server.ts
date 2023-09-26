import express, { Application } from 'express';
import { connectToMongo } from './src/config/database';
import { configDotenv } from 'dotenv';
import { startProductoRouter } from './src/module/Productos/productos.routes';
import { ProductoServiceMongo } from './src/module/Productos/services/producto.mongo.service';

export function startServer () {
    // instancia de express
    const app: Application = express();
    configDotenv();
    // middlewares
    app.use(express.json());

    // rutas
    app.use('/api/productos', startProductoRouter(new ProductoServiceMongo()));
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
