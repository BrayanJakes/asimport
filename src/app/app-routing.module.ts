import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsorbeOloresComponent } from './pages/absorbe-olores/absorbe-olores.component';
import { AmbientadoresComponent } from './pages/ambientadores/ambientadores.component';
import { ColgadoresComponent } from './pages/colgadores/colgadores.component';
import { GelComponent } from './pages/gel/gel.component';
import { HomeComponent } from './pages/home/home.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PagesComponent } from './pages/pages/pages.component';
import { PetalosComponent } from './pages/petalos/petalos.component';
import { SprayComponent } from './pages/spray/spray.component';

const routes: Routes = [
  {
    path: 'app', component: PagesComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'colgadores', component: ColgadoresComponent
      },
      {
        path: 'gel', component: GelComponent
      },
      {
        path: 'ambientadores', component: AmbientadoresComponent
      },
      {
        path: 'absorbe', component: AbsorbeOloresComponent
      },
      {
        path: 'petalos', component: PetalosComponent
      },
      {
        path: 'spray', component: SprayComponent
      },
      {
        path: 'info', component: InformacionComponent
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  },
  {
    path: '**', redirectTo: 'app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
