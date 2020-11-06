import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Persona} from '../Modelo/Persona';
import {Firma} from '../Modelo/Firma';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  Personas: Persona[];
  private Url = 'http://localhost:8086/api/persona/';
  private headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  getPersonas() {
    return this.http.get<Persona[]>(this.Url + 'all',{ 'headers': this.headers });
  }
  getPersona(id: string) {
    return this.http.get<Persona>(this.Url + id,{ 'headers': this.headers });
  }
  addPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url, persona,{ 'headers': this.headers });
  }
  addFirma(firma: Firma) {
    return this.http.post<Firma>(this.Url + 'firma', firma,{ 'headers': this.headers });
  }
  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.Url + persona.id, persona,{ 'headers': this.headers });
  }
  deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.Url + persona.id,{ 'headers': this.headers });
  }
}
