import { VentasModelMongo } from '../ventas.model';
import { VentasService } from '../ventas.service';
import { Ventas } from '../ventas.entity';
import { populate } from 'dotenv';

export class VentasServiceMongo implements VentasService {
    private model = VentasModelMongo;

    async listarVentas (): Promise<Array<Ventas>> {
      try {
        const ventas = await this.model.find({ isActive: true }).populate("idProducto",["nombre","precio"]).populate("idCliente",["nombre"])
        console.log(ventas);
        return ventas;
      } catch (error) {
        console.error('Error al listar ventas:', error);
        throw new Error('Error al listar ventas: ' + error);
      }
    }
    async crearVentas (ventas: Ventas): Promise<Ventas> {
        const nuevaVenta = await this.model.create({
            fecha: ventas.fecha,
            idProducto: ventas.idProducto,
            idCliente:ventas.idCliente,
            cantidad: ventas.cantidad
        });
        return nuevaVenta;
    }
}
