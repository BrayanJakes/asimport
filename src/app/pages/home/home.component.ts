import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos = [
    { route: 'gel', src: 'assets/img/gel.png'},
    { route: 'colgadores', src: 'assets/img/golgadores.png'},
    { route: 'petalos', src: 'assets/img/petalos.png'},
    { route: 'spray', src: 'assets/img/sprayy.png'},
    { route: 'ambientadores', src: 'assets/img/ambientadores de baño.png'},
    { route: 'absorbe', src: 'assets/img/absorbe olores.png'},
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
