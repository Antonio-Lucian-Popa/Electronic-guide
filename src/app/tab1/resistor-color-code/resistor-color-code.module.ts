import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResistorColorCodePageRoutingModule } from './resistor-color-code-routing.module';

import { ResistorColorCodePage } from './resistor-color-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResistorColorCodePageRoutingModule
  ],
  declarations: [ResistorColorCodePage]
})
export class ResistorColorCodePageModule {}
