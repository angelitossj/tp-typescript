import { Router } from 'express';
import { VentasService } from './ventas.service';
import { ProductoModelMongo } from '../Productos/producto.model';

export function iniciarVentasRouter (ventasServicio: VentasService) {
    const ventasRouter = Router();

    ventasRouter.get('/', async (req, res) => {
        try {
            const allVentas = await ventasServicio.listarVentas()
            

              
            if (!allVentas.length) {
                return res.json('No se encontro ninguna venta');
            }
            res.json(allVentas)
        } catch (error) {
            return res.json({ error });
        }
    });
    ventasRouter.post('/:idProducto', async (req, res) => {
        try {
            const { idProducto } = req.params;
            const producto =await  ProductoModelMongo.findById(idProducto);
            const id = producto!._id
            
            const { fecha, cantidad } = req.body;
            const nuevaVenta = await ventasServicio.crearVentas({
                fecha,
                idProducto:id,
                cantidad
            });
            return res.json(nuevaVenta);
        } catch (error) {
            return res.json(error);
        }
    });

    return ventasRouter
}
