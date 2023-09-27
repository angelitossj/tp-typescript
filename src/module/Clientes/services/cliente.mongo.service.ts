import {ClienteModel} from "../clientes.model"
import {ClientesService} from "../clientes.service"
import {Clientes}from "../clientes.entity"

export class ClientesServiceMongo implements ClientesService{
    private model=ClienteModel

    async listar():Promise<Array<Clientes>>{
        const clientes= await this.model.find({isActive:true})
        return clientes
    }

    async crear (cliente:Clientes): Promise<Clientes>{
        const {nombre,email,password}=cliente
        const nuevoClientes=await this.model.create({
            nombre:nombre.toLocaleLowerCase(),
            email:email.toLocaleLowerCase(),
            password:password.toLocaleLowerCase()
        })
        return nuevoClientes
    }

}
