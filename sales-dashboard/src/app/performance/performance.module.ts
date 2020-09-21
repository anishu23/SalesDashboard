import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance.component';
import { TabHeaderModule } from '../tab-header/tab-header.module';
import { PerformanceConstants } from './performance.constants';
import { RomanPipeModule } from '../roman-pipe/roman-pipe.module';

@NgModule({
  declarations: [PerformanceComponent],
  imports: [
    CommonModule,
    TabHeaderModule,
    RomanPipeModule
  ],
  exports: [
    PerformanceComponent
  ],
  providers: [PerformanceConstants]
})
export class PerformanceModule { }
