import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import {Md5} from 'ts-md5/dist/md5';
import {Persona} from '../../Modelo/Persona';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';
import {Firma} from '../../Modelo/Firma';
@Component({
  selector: 'app-edit',
  templateUrl: './canvasfirma.component.html',
  styleUrls: ['./canvasfirma.component.css'],
  providers: [ServiceService]
})

export class CanvasfirmaComponent implements OnInit,  AfterViewInit {
  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;
  public signaturepad: ElementRef;
  private personas: Persona[];
  private persona: Persona = null;
  private selectText : string ="Seleccione una persona"
  private signaturePadOptions = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,//0.5
    'maxWidth': 2,//2.5
    'throttle':3,//0 a 16
    'canvasWidth': 300,
    'canvasHeight': 100,
    'dotSize': 0.9,
    'penColor':"black"
  };
  constructor(private service: ServiceService, private router: Router) {
  }


  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
      });
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.options = this.signaturePadOptions;
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  selectPersona(persona:Persona)
  {
    this.persona = persona;
    this.selectText = this.persona.nombre;
  }

  saveFirmaWithUsuario() {
    if(this.persona !== null)
    {
      if(this.persona.firma == null)
      {
        let  hashcode: string = <string> Md5.hashStr(JSON.stringify(this.persona));
        let firma: Firma = new Firma;
        firma.firmahashcode = hashcode;
        // Se obtiene la firma en base 64
        firma.firmajpg = <string> this.signaturePad.toDataURL();

        this.persona.firma = firma;
      }
      this.service.updatePersona(this.persona)
        .subscribe(data => {
          this.persona = data;
        });
    }else{
      alert("Seleccione una persona");
    }
  }

  saveFirma(firma:Firma){
    this.service.addFirma(firma)
      .subscribe(data => {
        this.persona.firma = data;
      });
  }

  clear() {
    // will be notified of szimek/signature_pad's onEnd event
    this.signaturePad.clear();
  }
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    //console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
