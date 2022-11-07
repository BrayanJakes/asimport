import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colgadores',
  templateUrl: './colgadores.component.html',
  styleUrls: ['./colgadores.component.css']
})
export class ColgadoresComponent implements OnInit {

  colgadoresContador = 0;
  dosxunosContador = 0;
  desodoresContador = 0;
  antipolillasContador = 0;
  sticksContador = 0;

  

  dosxunos = [
    {
      name: '2x1 Lavanda',
      src: 'assets/img/colgadores/2x1 lavanda.png'
    },
    {
      name: '2x1 Limon',
      src: 'assets/img/colgadores/2x1 limon.png'
    },
    {
      name: '2x1 Pino',
      src: 'assets/img/colgadores/2x1 pino.png'
    },
    {
      name: '2x1 Rosa',
      src: 'assets/img/colgadores/2x1 rosa.png'
    },
  ]

  antipolillas = [
    {
      name: 'antipolilla lavanda grande',
      src: 'assets/img/colgadores/antipolilla lavanda grande.png'
    },
    {
      name: 'antipolilla limon',
      src: 'assets/img/colgadores/antipolilla limon.png'
    },
    {
      name: 'antipolilla pino',
      src: 'assets/img/colgadores/antipolilla pino.png'
    },
    {
      name: 'antipolilla rosa',
      src: 'assets/img/colgadores/antipolilla rosa.png'
    },
  ]

  colgadores = [
    {
      name: 'colgador campanilla',
      src: 'assets/img/colgadores/colgador campanilla.png'
    },
    {
      name: 'colgador rosa',
      src: 'assets/img/colgadores/colgador rosa.png'
    },
    {
      name: 'colgador tulipan',
      src: 'assets/img/colgadores/colgador tulipan.png'
    },
    {
      name: 'colgador verbena',
      src: 'assets/img/colgadores/colgador verbena.png'
    },
    {
      name: 'colgadores varios',
      src: 'assets/img/colgadores/colgadores varios.png'
    },
    {
      name: 'colgador lavanda',
      src: 'assets/img/colgadores/colgador lavanda.png'
    },
  ]

  desodores = [
    {
      name: 'desodor bosque',
      src: 'assets/img/colgadores/desodor bosque.png'
    },
    {
      name: 'desodor floral',
      src: 'assets/img/colgadores/desodor floral.png'
    },
    {
      name: 'desodor fresa',
      src: 'assets/img/colgadores/desodor fresa.png'
    },
    {
      name: 'desodor jazmin',
      src: 'assets/img/colgadores/desodor jazmin.png'
    },
    {
      name: 'desodor lavanda pequeño',
      src: 'assets/img/colgadores/desodor lavanda pequeño.png'
    },
    {
      name: 'desodor lavanda',
      src: 'assets/img/colgadores/desodor lavanda.png'
    },
    {
      name: 'desodor pino',
      src: 'assets/img/colgadores/desodor pino.png'
    },
    {
      name: 'desodor rosa grande',
      src: 'assets/img/colgadores/desodor rosa grande.png'
    },
    {
      name: 'desodor rosa pequeño',
      src: 'assets/img/colgadores/desodor rosa pequeño.png'
    },
    {
      name: 'desodor lavanda',
      src: 'assets/img/colgadores/desodor lavanda.png'
    },
  ]

  sticks = [
    {
      name: 'stick citricos',
      src: 'assets/img/colgadores/stick citricos.png'
    },
    {
      name: 'stick coco',
      src: 'assets/img/colgadores/stick coco.png'
    },
    {
      name: 'stick fresa',
      src: 'assets/img/colgadores/stick fresa.png'
    },
    {
      name: 'stick lavanda grande',
      src: 'assets/img/colgadores/stick lavanda grande.png'
    },
    {
      name: 'stick lavanda pequeño',
      src: 'assets/img/colgadores/stick lavanda pequeno.png'
    },
    {
      name: 'stick manzana',
      src: 'assets/img/colgadores/stick manzana.png'
    },
    {
      name: 'stick melocoton',
      src: 'assets/img/colgadores/stick melocoton.png'
    },
    {
      name: 'stick pino',
      src: 'assets/img/colgadores/stick pino.png'
    },
    {
      name: 'stick rosa',
      src: 'assets/img/colgadores/stick rosa.png'
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


  next(){
    this.colgadoresContador === 5 ? null : this.colgadoresContador += 1
  }

  previo(){
    this.colgadoresContador === 0 ? null : this.colgadoresContador -= 1
  }

  nextDosPorUno(){
    this.dosxunosContador === 3 ? null : this.dosxunosContador += 1
  }

  previoDosPorUno(){
    this.dosxunosContador === 0 ? null : this.dosxunosContador -= 1
  }

  nextDesodores(){
    this.desodoresContador === 9 ? null : this.desodoresContador += 1
  }

  previoDesodores(){
    this.desodoresContador === 0 ? null : this.desodoresContador -= 1
  }
  nextAntipolilla(){
    this.antipolillasContador === 3 ? null : this.antipolillasContador += 1
  }

  previoAntipolilla(){
    this.antipolillasContador === 0 ? null : this.antipolillasContador -= 1
  }

  nextSticks(){
    this.sticksContador === 8 ? null : this.sticksContador += 1
  }

  previoSticks(){
    this.sticksContador === 0 ? null : this.sticksContador -= 1
  }

  goToNext(){
    this.router.navigateByUrl('app/petalos')
  }

}
