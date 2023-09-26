import { Producto } from './producto.entity'

export interface ProductoService {
  list(): Promise<Array<Producto>>
  // find(id: string): Promise<Producto | null>
  findByName(name: string): Promise<Array<Producto> | null>
  create({ nombre, precio, descripcion, stock, }: Producto): Promise<Producto>
  update(
    id: string,
    { nombre, precio, descripcion, stock }: Producto
  ): Promise<Producto | null>
  delete(id: string): Promise<Producto | null>
}
