import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambientadores',
  templateUrl: './ambientadores.component.html',
  styleUrls: ['./ambientadores.component.css']
})
export class AmbientadoresComponent implements OnInit {

  aguaAzulContador = 0;
  wcTransContador = 0;
  wcWhiteContador = 0;

  

  aguaAzul = [
    {
      name: 'Aguazul pequeño',
      src: 'assets/img/ambientadores/aguazul pequeño.png'
    }
  ]

  wcTrans = [
    {
      name: 'wc transparente grande',
      src: 'assets/img/ambientadores/wc transparente grande.png'
    },
    {
      name: 'Capa 618 copia 2',
      src: 'assets/img/ambientadores/Capa 618 copia 2.png'
    },
    {
      name: 'Capa 618 copia 3',
      src: 'assets/img/ambientadores/Capa 618 copia 3.png'
    },
    {
      name: 'Capa 618 copia 4',
      src: 'assets/img/ambientadores/Capa 618 copia 4.png'
    },
    {
      name: 'Capa 618 copia',
      src: 'assets/img/ambientadores/Capa 618 copia.png'
    },
    {
      name: 'Capa 618',
      src: 'assets/img/ambientadores/Capa 618.png'
    }
  ]

  wcWhite = [
    {
      name: 'ambientador blanco',
      src: 'assets/img/ambientadores/ambientador blanco.png'
    },
    {
      name: 'Capa 627 copia 2',
      src: 'assets/img/ambientadores/Capa 627 copia 2.png'
    },
    {
      name: 'Capa 627 copia 3',
      src: 'assets/img/ambientadores/Capa 627 copia 3.png'
    },
    {
      name: 'Capa 627 copia 5',
      src: 'assets/img/ambientadores/Capa 627 copia 5.png'
    },
    {
      name: 'Capa 627 copia 6',
      src: 'assets/img/ambientadores/Capa 627 copia 6.png'
    },
    {
      name: 'Capa 627 copia 7',
      src: 'assets/img/ambientadores/Capa 627 copia 7.png'
    },
  ]

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  nextWcTrans(){
    this.wcTransContador === 5 ? null : this.wcTransContador += 1
  }

  previoWcTrans(){
    this.wcTransContador === 0 ? null : this.wcTransContador -= 1
  }

  nextWcWhite(){
    this.wcWhiteContador === 5 ? null : this.wcWhiteContador += 1
  }

  previoWcWhite(){
    this.wcWhiteContador === 0 ? null : this.wcWhiteContador -= 1
  }

  goToNext(){
    this.router.navigateByUrl('app/absorbe')
  }

}
