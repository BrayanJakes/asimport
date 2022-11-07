import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spray',
  templateUrl: './spray.component.html',
  styleUrls: ['./spray.component.css']
})
export class SprayComponent implements OnInit {

  sprayContador = 0;

  sprays = [
    {
      name: 'spray aroma de bebe',
      src: 'assets/img/spray/spray aroma de bebe.png'
    },
    {
      name: 'spray canela',
      src: 'assets/img/spray/spray canela.png'
    },
    {
      name: 'spray coco',
      src: 'assets/img/spray/spray coco.png'
    },
    {
      name: 'spray fresa pequeño',
      src: 'assets/img/spray/spray fresa pequeño.png'
    },
    {
      name: 'spray fresa',
      src: 'assets/img/spray/spray fresa.png'
    },
    {
      name: 'spray lavanda',
      src: 'assets/img/spray/spray lavanda.png'
    },
    {
      name: 'spray limon',
      src: 'assets/img/spray/spray limon.png'
    },
    {
      name: 'spray ropa limpia',
      src: 'assets/img/spray/spray ropa limpia.png'
    },
  ]

  botellitas = [
    {
      name: 'botellitasd',
      src: 'assets/img/spray/botellitasd.png'
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

  nextSprays(){
    this.sprayContador === 7 ? null : this.sprayContador += 1
  }

  previoSprays(){
    this.sprayContador === 0 ? null : this.sprayContador -= 1
  }

  goToHome(){
    this.router.navigateByUrl('app/ambientadores')
  }

}
