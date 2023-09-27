import {Schema,model} from 'mongoose'
import { Clientes } from './clientes.entity'
import { stringRequired,booleanDefaultTrue, } from '../../types/mongo.types'

const ClienteSchemaMongo = new Schema<Clientes>({
    nombre:stringRequired,
    email:stringRequired,
    password:stringRequired,
    isActive:booleanDefaultTrue,
}, {
    versionKey: false,
    timestamps: true
  })

export const ClienteModel= model<Clientes>("clientes",ClienteSchemaMongo)