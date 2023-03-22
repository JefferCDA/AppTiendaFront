import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TillRoutingModule } from './till-routing.module';
import { TillComponent } from './components/till.component';


@NgModule({
  declarations: [
    TillComponent
  ],
  imports: [
    CommonModule,
    TillRoutingModule
  ]
})
export class TillModule { }
