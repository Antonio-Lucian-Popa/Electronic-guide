import { Component, ViewChild } from '@angular/core';
import { IonNav, NavController } from '@ionic/angular';
import { ResistorColorCodeComponent } from '../pages/resistor-color-code/resistor-color-code.component';
import { OhmsLawComponent } from '../pages/ohms-law/ohms-law.component';
import { InductorColorCodeComponent } from '../pages/inductor-color-code/inductor-color-code.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ResistorColorCodeComponent = ResistorColorCodeComponent;
  OhmsLawComponent = OhmsLawComponent;
  InductorColorCodeComponent = InductorColorCodeComponent;

}
