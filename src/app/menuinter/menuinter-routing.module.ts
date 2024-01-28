import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuinterPage } from './menuinter.page';

const routes: Routes = [
  {
    path: '',
    component: MenuinterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuinterPageRoutingModule {}
