import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  desactivarLogo = false;

  route = [
    'absorbe',
    'ambientadores',
    'colgadores',
    'gel',
    'petalos',
    'spray'
  ]

  constructor(private router: Router) { 

    setInterval(() => {
      if(!window.location.href.includes('home')){
        this.desactivarLogo = true;
      }else{
        this.desactivarLogo = false;
      }
    }, 500)
  }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigateByUrl('app/home')
  }

  gotInfo(){
    this.router.navigateByUrl('app/info')
  }

  busqueda(value: string){
    if(this.route.includes(value)){
       this.router.navigateByUrl(`app/${value}`);
       return value = '';
    }else{
      return 
    }
    
  }

  contacto(){
    window.scrollTo({
      top: 10000,
      behavior: 'smooth'
    });
  }

}
