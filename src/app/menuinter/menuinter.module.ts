import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuinterPageRoutingModule } from './menuinter-routing.module';

import { MenuinterPage } from './menuinter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuinterPageRoutingModule
  ],
  declarations: [MenuinterPage]
})
export class MenuinterPageModule {}
