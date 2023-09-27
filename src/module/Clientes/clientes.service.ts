import { Clientes } from "./clientes.entity";


export interface ClientesService {
    listar():Promise<Array<Clientes>>
    crear({nombre,email,password}:Clientes):Promise<Clientes>
}