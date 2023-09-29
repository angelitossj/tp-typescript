import { Router } from 'express';
import { VentasService } from './ventas.service';
import { ProductoModelMongo } from '../Productos/producto.model';
import { ClienteModel } from '../Clientes/clientes.model';
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
    ventasRouter.post('/:idProducto/:idCliente', async (req, res) => {
        try {
            const { idProducto } = req.params;
            const {idCliente}= req.params;

            const producto =await  ProductoModelMongo.findById(idProducto);
            const cliente =await  ClienteModel.findById(idCliente);
            const id = producto!._id
            const idClient =cliente!._id
            const precio=producto!.precio
            const { fecha, cantidad } = req.body;
            const totalPrecio=cantidad*precio
            const nuevaVenta = await ventasServicio.crearVentas({
                fecha,
                idProducto:id,
                idCliente:idClient,
                cantidad,
                total:totalPrecio,
            });
            return res.json(nuevaVenta);
        } catch (error) {
            return res.json(error);
        }
    });

    return ventasRouter
}
