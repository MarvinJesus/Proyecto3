import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {Persona} from '../../Modelo/Persona';
@Component({
  selector: 'app-listar',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  providers: [ServiceService]
})
export class TablaComponent implements OnInit {
  personas: Persona[];
  constructor(private service: ServiceService, private router: Router ) { }
  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }
  deletePersona(index: number) {
    this.service.deletePersona(this.personas[index])
      .subscribe(data => {
        this.personas.splice(index, 1);
    });
    alert('Se elimino a ' + this.personas[index].nombre);
  }
  clonePersona(index: number) {
    let persona = new Persona(this.personas[index]);
    persona.id = null;
    if(this.personas[index].firma != null)
    {
      persona.firma = null;
    }
    this.service.addPersona(persona)
      .subscribe(data => {
        console.log(data);
        this.personas.push(data)
      });
    alert('Se clono a ' + this.personas[index].nombre);
  }
}
