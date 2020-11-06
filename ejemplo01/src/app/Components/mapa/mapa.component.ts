import { Component, AfterViewInit , ViewChild, ElementRef, OnInit} from '@angular/core';
import {Persona} from '../../Modelo/Persona';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: [ServiceService]
})
export class MapaComponent implements AfterViewInit, OnInit {
  title = 'angular-gmap';
  personas: Persona[];
  constructor(private service: ServiceService, private router: Router ) {}
  // Obtener referencia al elemento div donde se mostrara el mapa
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  // Obtener instancia del mapa
  map: google.maps.Map;
  lat = 9.92556591;
  lng = -84.07836914;
  // crear una coodernada
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  // Configurar la vista del mapa
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 7,
    minZoom: 8,
    mapTypeId: "hybrid"//satellite, roadmap ,hybrid, terrain
  };
  markerInitializer(): void {
    this.personas.forEach(personaInfo => {
      // Crear  un icono para los  marcadores
      let myIcon = {
        url: "https://www.iconfinder.com/data/icons/places-4/100/home_place_marker_location_house_apartment-512.png", // url de la imagen del icono
        scaledSize: new google.maps.Size(70, 70), // Tamaño del icono
        origin: new google.maps.Point(0,0), // origen
        anchor: new google.maps.Point(0, 0) // ancla
      };
      let  markerObjet;
      markerObjet = {
        position: new google.maps.LatLng(parseFloat(personaInfo.latitud), parseFloat(personaInfo.longitud)),
        map: this.map,//Agregar el map
        //title: personaInfo.nombre + ' ' + personaInfo.apellido,
        icon: myIcon,//Agregar el icono,
        animation: google.maps.Animation.DROP//Animación
      };
      //Agregar mapa al aregglo de markers
      const marker = new google.maps.Marker({
        ...markerObjet
        });
      marker.addListener("click", () => {
        const infoWindoMarker = new google.maps.InfoWindow({
          content: this.getInfoWindow(personaInfo),
          maxWidth: 500,
        });
        infoWindoMarker.open(marker.getMap(), marker);
      });
      // Agregar otro marcador al mapa
      marker.setMap(this.map);
    });
  }
  ngOnInit() {
    this.service.getPersonas()
      .subscribe(data => {
        this.personas = data;
        // Crear otros marcadores
        this.markerInitializer();
      });
  }
  ngAfterViewInit() {
    this.mapInitializer();
  }
 getInfoWindow(persona: Persona): string {
    let html: string;
    html = '<div class="card" style="width: 12rem;">' +
        '  <img class="card-img-top" src="' + persona.imagen + ' ">' +
        '  <div class="card-body">' +
        '    <h5 class="card-title">' + persona.nombre + '</h5>' +
        '    <p class="card-text">' + persona.apellido + '</p>' +
        '    <a href="http://maps.google.com/maps?q=' +  persona.latitud  + '%2C' + persona.longitud + '" class="btn btn-primary">Go somewhere</a>' +
        '  </div>' +
        '</div>';
    return html;
 }
// Inicializar el mapa
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);

  }




}
