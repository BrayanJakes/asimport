import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos = [
    { route: 'gel', src: 'assets/img/gel.png', changeText: false, name: 'Gel'},
    { route: 'colgadores', src: 'assets/img/golgadores.png', changeText: false, name: 'Colgadores'},
    { route: 'petalos', src: 'assets/img/petalos.png', changeText: false, name: 'Pétalos'},
    { route: 'spray', src: 'assets/img/sprayy.png', changeText: false, name: 'Spray'},
    { route: 'ambientadores', src: 'assets/img/ambientadores de baño.png', changeText: false, name: 'Ambientadores'},
    { route: 'absorbe', src: 'assets/img/absorbe olores.png', changeText: false, name: 'Absorbe olores'},
  ]

  constructor(private router: Router) { 
    
  }


  navigate(route: string){
    this.router.navigateByUrl(`app/${route}`)
  }

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
