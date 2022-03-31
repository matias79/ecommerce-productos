import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Producto} from './producto.model';

@model({
  settings: {
    foreignkeys: {
      fk_imagen_id_producto: {
        name: 'fk_imagen_id_producto',
        entity: 'Producto',
        entitykey: 'id',
        foreignkey: 'id_producto',
      }
    },
  },
})
export class Imagen extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => Producto, {name: 'pernece_a_producto'})
  id_producto: number;

  constructor(data?: Partial<Imagen>) {
    super(data);
  }
}

export interface ImagenRelations {
  // describe navigational properties here
}

export type ImagenWithRelations = Imagen & ImagenRelations;
