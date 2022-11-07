import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages/pages/pages.component';
import { ColgadoresComponent } from './pages/colgadores/colgadores.component';
import { GelComponent } from './pages/gel/gel.component';
import { AmbientadoresComponent } from './pages/ambientadores/ambientadores.component';
import { AbsorbeOloresComponent } from './pages/absorbe-olores/absorbe-olores.component';
import { PetalosComponent } from './pages/petalos/petalos.component';
import { SprayComponent } from './pages/spray/spray.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    ColgadoresComponent,
    GelComponent,
    AmbientadoresComponent,
    AbsorbeOloresComponent,
    PetalosComponent,
    SprayComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
