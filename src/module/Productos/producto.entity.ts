import {Schema} from 'mongoose'

export interface Producto{
    nombre: string
    descripcion: string
    precio: number
    stock: number
    // categoriaId?: Schema.Types.ObjectId
    // proveedorId?: Schema.Types.ObjectId
    isActive?: boolean
}