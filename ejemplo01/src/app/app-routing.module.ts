import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './Components/tabla/tabla.component';
import {MapaComponent} from './Components/mapa/mapa.component';
import {CanvasfirmaComponent} from './Components/canvas_firma/canvasfirma.component';
import {VrvizorComponent} from './Components/vrvizor/vrvizor.component';
import { ChatComponent } from './Components/chat/chat.component';


const routes: Routes = [
  {path: 'tabla', component: TablaComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'canvasfirma', component: CanvasfirmaComponent},
  {path: 'vrvizor', component: VrvizorComponent},
  {path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
