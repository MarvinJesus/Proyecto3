import {Firma} from './Firma';
export class Persona {
  public id: number;
  public nombre: string;
  public apellido: string;
  public longitud: string;
  public latitud: string;
  public imagen: string;
  firma: Firma;
  constructor(persona:Persona) {
    this.nombre = persona.nombre;
    this.apellido = persona.apellido;
    this.longitud = persona.longitud;
    this.latitud = persona.latitud;
    this.imagen = persona.imagen;
    if(persona.firma != null)
    {
      this.firma = persona.firma;
    }
  }

}
