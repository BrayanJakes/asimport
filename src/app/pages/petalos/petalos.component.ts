import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petalos',
  templateUrl: './petalos.component.html',
  styleUrls: ['./petalos.component.css']
})
export class PetalosComponent implements OnInit {

  petalosContador = 0;

  petalos = [
    {
      name: 'petalos fresas',
      src: 'assets/img/petalos/petalos fresas.png'
    },
    {
      name: 'petalos lavanda',
      src: 'assets/img/petalos/petalos lavanda.png'
    },
    {
      name: 'petalos pino',
      src: 'assets/img/petalos/petalos pino.png'
    },
    {
      name: 'petalos rosas',
      src: 'assets/img/petalos/petalos rosas.png'
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


  
  nextPetalos(){
    this.petalosContador === 3 ? null : this.petalosContador += 1
  }

  previoPetalos(){
    this.petalosContador === 0 ? null : this.petalosContador -= 1
  }

  goToNext(){
    this.router.navigateByUrl('app/spray')
  }


}
