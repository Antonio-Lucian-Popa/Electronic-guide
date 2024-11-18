import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhmsLawPageRoutingModule } from './ohms-law-routing.module';

import { OhmsLawPage } from './ohms-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhmsLawPageRoutingModule
  ],
  declarations: [OhmsLawPage]
})
export class OhmsLawPageModule {}
