import { Ventas } from "./ventas.entity";

export interface VentasService{
    listarVentas():Promise<Array<Ventas>>
    crearVentas({fecha,idProducto,idCliente,cantidad}:Ventas):Promise<Ventas>
}