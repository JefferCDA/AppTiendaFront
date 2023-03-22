import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockControlRoutingModule } from './stock-control-routing.module';
import { StockControlComponent } from './components/stock-control.component';


@NgModule({
  declarations: [
    StockControlComponent
  ],
  imports: [
    CommonModule,
    StockControlRoutingModule
  ]
})
export class StockControlModule { }
