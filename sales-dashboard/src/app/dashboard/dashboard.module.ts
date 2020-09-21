import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardConstants } from './dashboard.constants';
import { TabHeaderModule } from '../tab-header/tab-header.module';
import { FunnelBoardModule } from '../funnel-board/funnel-board.module';
import { DetailsTableModule } from '../details-table/details-table.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TabHeaderModule,
    FunnelBoardModule,
    DetailsTableModule
  ],
  entryComponents: [
    DashboardComponent
  ],
  providers: [
    DashboardConstants,
    DashboardService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
