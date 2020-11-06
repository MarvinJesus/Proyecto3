import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { MapaComponent } from './Components/mapa/mapa.component';
import { CanvasfirmaComponent } from './Components/canvas_firma/canvasfirma.component';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';
import {FormsModule} from '@angular/forms';
import { VrvizorComponent } from './Components/vrvizor/vrvizor.component';
import { ChatComponent } from './Components/chat/chat.component';
@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    MapaComponent,
    CanvasfirmaComponent,
    VrvizorComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SignaturePadModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
