import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsTableComponent } from './details-table.component';



@NgModule({
  declarations: [DetailsTableComponent],
  imports: [
    CommonModule
  ],
  exports: [DetailsTableComponent]
})
export class DetailsTableModule { }
