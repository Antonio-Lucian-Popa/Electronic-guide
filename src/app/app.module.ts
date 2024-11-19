import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistorColorCodeComponent } from './pages/resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from './pages/ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from './pages/inductor-color-code/inductor-color-code.component';

@NgModule({
  declarations: [AppComponent, ResistorColorCodeComponent,
    OhmsLawComponent,
    InductorColorCodeComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
