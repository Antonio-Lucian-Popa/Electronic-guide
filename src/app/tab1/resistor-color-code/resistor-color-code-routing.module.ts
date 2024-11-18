import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResistorColorCodePage } from './resistor-color-code.page';

const routes: Routes = [
  {
    path: '',
    component: ResistorColorCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResistorColorCodePageRoutingModule {}
