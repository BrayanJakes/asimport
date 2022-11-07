import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gel',
  templateUrl: './gel.component.html',
  styleUrls: ['./gel.component.css']
})
export class GelComponent implements OnInit {

  clasisContador = 0;
  conchasContador = 0;
  latasContador = 0;
  ovalsContador = 0;
  
  clasis = [
    {
      name: 'gel canela',
      src: 'assets/img/gel/gel canela.png'
    },
    {
      name: 'gel coco',
      src: 'assets/img/gel/gel coco.png'
    },
    {
      name: 'gel fresa',
      src: 'assets/img/gel/gel fresa.png'
    },
    {
      name: 'gel jazmin',
      src: 'assets/img/gel/gel jazmin.png'
    },
    {
      name: 'gel lavanda',
      src: 'assets/img/gel/gel lavanda.png'
    },
    {
      name: 'gel limon',
      src: 'assets/img/gel/gel limon.png'
    },
    {
      name: 'gel manzana',
      src: 'assets/img/gel/gel manzana.png'
    },
    {
      name: 'gel pino',
      src: 'assets/img/gel/gel pino.png'
    },
    {
      name: 'gel rosa',
      src: 'assets/img/gel/gel rosa.png'
    },
    {
      name: 'vainilla gel',
      src: 'assets/img/gel/vainilla gel.png'
    },
  ]

    
  conchas = [
    {
      name: 'gel concba azul claro',
      src: 'assets/img/gel/gel concba azul claro.png'
    },
    {
      name: 'gel concba morado',
      src: 'assets/img/gel/gel concba morado.png'
    },
    {
      name: 'gel concha azul grande',
      src: 'assets/img/gel/gel concha azul grande.png'
    },
    {
      name: 'gel concha vainila',
      src: 'assets/img/gel/gel concha vainila.png'
    },
    {
      name: 'gel conchja verde',
      src: 'assets/img/gel/gel conchja verde.png'
    }
  ]

  latas = [
    {
      name: 'gel lata canela',
      src: 'assets/img/gel/gel lata canela.png'
    },
    {
      name: 'gel lata coco',
      src: 'assets/img/gel/gel lata coco.png'
    },
    {
      name: 'gel lata fresa grande',
      src: 'assets/img/gel/gel lata fresa grande.png'
    },
    {
      name: 'gel lata frutas del bosque',
      src: 'assets/img/gel/gel lata frutas del bosque.png'
    },
    {
      name: 'gel lata lavanda',
      src: 'assets/img/gel/gel lata lavanda.png'
    },
    {
      name: 'gel lata limon',
      src: 'assets/img/gel/gel lata limon.png'
    },
    {
      name: 'gel lata manzana',
      src: 'assets/img/gel/gel lata manzana.png'
    },
    {
      name: 'gel lata naranja',
      src: 'assets/img/gel/gel lata naranja.png'
    },
    {
      name: 'gel lata perfume infantil',
      src: 'assets/img/gel/gel lata perfume infantil.png'
    },
    {
      name: 'gel lata ropa limpia',
      src: 'assets/img/gel/gel lata ropa limpia.png'
    },
    {
      name: 'gel lata rosa',
      src: 'assets/img/gel/gel lata rosa.png'
    }
  ]


    
  ovals = [
    {
      name: 'gel oval canela',
      src: 'assets/img/gel/gel oval canela.png'
    },
    {
      name: 'gel oval frutas del bosque',
      src: 'assets/img/gel/gel oval frutas del bosque.png'
    },
    {
      name: 'gel oval jazmin',
      src: 'assets/img/gel/gel oval jazmin.png'
    },
    {
      name: 'gel oval lavanda grande',
      src: 'assets/img/gel/gel oval lavanda grande.png'
    },
    {
      name: 'gel oval lavanda pequeño menu',
      src: 'assets/img/gel/gel oval lavanda pequeño menu.png'
    },
    {
      name: 'gel oval pino',
      src: 'assets/img/gel/gel oval pino.png'
    },
    {
      name: 'gel oval ropa limpia',
      src: 'assets/img/gel/gel oval ropa limpia.png'
    },
    {
      name: 'gel oval rosa',
      src: 'assets/img/gel/gel oval rosa.png'
    },
    {
      name: 'gel oval vainilla',
      src: 'assets/img/gel/gel oval vainilla.png'
    }
  ]

  constructor(private router: Router) { 
  
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  
  nextClasis(){
    this.clasisContador === 9 ? null : this.clasisContador += 1
  }

  previoClasis(){
    this.clasisContador === 0 ? null : this.clasisContador -= 1
  }

  
  nextConchas(){
    this.conchasContador === 4 ? null : this.conchasContador += 1
  }

  previoConchas(){
    this.conchasContador === 0 ? null : this.conchasContador -= 1
  }

  
  nextLatas(){
    this.latasContador === 10 ? null : this.latasContador += 1
  }

  previoLatas(){
    this.latasContador === 0 ? null : this.latasContador -= 1
  }

  
  nextOvals(){
    this.ovalsContador === 8 ? null : this.ovalsContador += 1
  }

  previoOvals(){
    this.ovalsContador === 0 ? null : this.ovalsContador -= 1
  }

  goNext(){
    this.router.navigateByUrl('app/colgadores')
  }

}
