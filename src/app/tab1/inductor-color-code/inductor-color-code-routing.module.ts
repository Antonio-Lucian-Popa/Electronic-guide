import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InductorColorCodePage } from './inductor-color-code.page';

const routes: Routes = [
  {
    path: '',
    component: InductorColorCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductorColorCodePageRoutingModule {}
