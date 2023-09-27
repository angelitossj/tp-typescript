import { Ventas } from "./ventas.entity";

export interface VentasService{
    listarVentas():Promise<Array<Ventas>>
    crearVentas({fecha,idProducto,cantidad}:Ventas):Promise<Ventas>
}