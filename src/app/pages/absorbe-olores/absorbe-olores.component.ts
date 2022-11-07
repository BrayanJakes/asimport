import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absorbe-olores',
  templateUrl: './absorbe-olores.component.html',
  styleUrls: ['./absorbe-olores.component.css']
})
export class AbsorbeOloresComponent implements OnInit {

  absorbeHumedad = [
    {
      name: 'absorbe humedad recambio universal foto',
      src: 'assets/img/absorbeOlores/absorbe humedad recambio universal foto.png'
    }
  ]

  absorbeFrigorifico = [
    {
      name: 'absorbe olores frigorifico',
      src: 'assets/img/absorbeOlores/absorbe olores frigorifico.png'
    }
  ]

  absorbeVerde = [
    {
      name: 'absorbe olores verde',
      src: 'assets/img/absorbeOlores/absorbe olores verde.png'
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

  goToNext(){
    this.router.navigateByUrl('app/gel')
  }

}
