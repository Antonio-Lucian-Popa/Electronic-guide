import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OhmsLawPage } from './ohms-law.page';

const routes: Routes = [
  {
    path: '',
    component: OhmsLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OhmsLawPageRoutingModule {}
