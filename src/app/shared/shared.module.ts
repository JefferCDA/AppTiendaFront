import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    FilterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
