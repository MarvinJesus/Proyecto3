import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo01';

  constructor(private router: Router) {}
  Tabla() {
    this.router.navigate(["tabla"]);
  }
  Mapa() {
    this.router.navigate(["mapa"]);
  }
  Canvasfirma() {
    this.router.navigate(["canvasfirma"]);
  }
  VrVisor() {
    this.router.navigate(["vrvizor"]);
  }
  chat() {
    this.router.navigate(["chat"]);
  }
}
