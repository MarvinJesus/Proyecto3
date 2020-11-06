import {Component, OnInit, ElementRef} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-vrvizor',
  templateUrl: './vrvizor.component.html',
  styleUrls: ['./vrvizor.component.css']
})
export class VrvizorComponent implements OnInit {

  dom: any;
  aframe: any;
  timeout: any;
  display: any;
  private parte1 =[];
  private parte2 = [];
  private data = [
    {
      id: "1",
      img360: "../../../assets/imgs/sala2.jpg",
      description: "Sala"
    },
    {
      id: "2",
      img360: "../../../assets/imgs/bano.jpg",
      description: "Banno"
    },
    {
      id: "3",
      img360: "../../../assets/imgs/comedor.jpg",
      description: "Comedor"
    },
    {
      id: "4",
      img360: "../../../assets/imgs/cuarto1.jpg",
      description: "Cuarto 1"
    },
    {
      id: "5",
      img360: "../../../assets/imgs/cuarto2.jpg",
      description: "Cuarto 2"
    },
    {
      id: "6",
      img360: "../../../assets/imgs/cocina.jpg",
      description: "Cocina"
    },
    {
      id: "7",
      img360: "../../../assets/imgs/patio3.jpg",
      description: "Patio"
    },
    {
      id: "8",
      img360: "../../../assets/imgs/patio2.jpg",
      description: "Patio #2"
    }
  ];
  constructor(ref: ElementRef,private location: Location) {
    this.dom = ref.nativeElement;
    this.dividirDatos();
  }
  dividirDatos()
  {
    let longitud = this.data.length;
    if(longitud > 5)
    {
      let mitad = Math.floor(this.data.length / 2);
      this.parte1 = this.data.slice(0, mitad);
      this.parte2 = this.data.slice(mitad);
    }else {
      this.parte1 = this.data;
    }

  }
  showMenu()
  {
    var elements = this.dom.querySelectorAll(".links");
    for(let i = 0; i < elements.length; i++ ){
        let visible:boolean = elements[i].getAttribute("visible");
        if(visible)
        {
          elements[i].setAttribute("visible", "false");
        }
        else{
          elements[i].setAttribute("visible", "true");
      }
    }

  }
  backPage()
  {
    this.location.back();
    this.aframe.remove();
  }
  ngOnInit() {
    this.aframe = this.dom.querySelector('a-scene');
  }
}
