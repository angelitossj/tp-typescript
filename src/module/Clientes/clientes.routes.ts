import {Router} from "express"
import { ClientesService } from "./clientes.service"


export function iniciarClienteRouter(clienteServicio:ClientesService){

    const clienteRouter=Router()


    clienteRouter.get("/",async(req,res)=>{
        try {
            const allClientes= await clienteServicio.listar()

            if (!allClientes){
                return res.json({
                    message:"no Se encuentran productos"
                })
            }
            return res.json(allClientes)
        } catch (error) {
            
        }
    })

    clienteRouter.post("/",async(req,res)=>{
        try {
            const{nombre,email,password}=req.body
            console.log(nombre,email,password) 
            const nuevoCliente= await clienteServicio.crear({nombre,email,password,isActive:true}) 
            return res.json(nuevoCliente) 
        } catch (error) {
            return res.json({error})
        }
    })
    return clienteRouter
}