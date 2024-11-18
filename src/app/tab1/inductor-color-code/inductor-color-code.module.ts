import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InductorColorCodePageRoutingModule } from './inductor-color-code-routing.module';

import { InductorColorCodePage } from './inductor-color-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InductorColorCodePageRoutingModule
  ],
  declarations: [InductorColorCodePage]
})
export class InductorColorCodePageModule {}
