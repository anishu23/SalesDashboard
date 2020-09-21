import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnelBoardComponent } from './funnel-board.component';
import { PerformanceModule } from '../performance/performance.module';
import { FunnelBoardConstants } from './funnel-board.constants';
import { FunnelBoardService } from './funnel-board.service';
import { RomanPipeModule } from '../roman-pipe/roman-pipe.module';



@NgModule({
  declarations: [FunnelBoardComponent],
  imports: [
    CommonModule,
    PerformanceModule,
    RomanPipeModule
  ],
  exports: [FunnelBoardComponent],
  providers: [FunnelBoardConstants, FunnelBoardService]
})
export class FunnelBoardModule { }
