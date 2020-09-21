import { Component, OnInit, Input, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { IFunnelBoardConfig } from './config/IFunnelBoardConfig.interface';
import { FunnelBoardConstants } from './funnel-board.constants';
import { FunnelBoardService } from './funnel-board.service';
import { RomanPipe } from '../roman-pipe/roman.pipe';

@Component({
  selector: 'app-funnel-board',
  templateUrl: './funnel-board.component.html',
  styleUrls: ['./funnel-board.component.css']
})
export class FunnelBoardComponent implements OnInit {

  constructor(private _constants: FunnelBoardConstants, private _service: FunnelBoardService, private _roman: RomanPipe) { }

  @Input('config') funnelBoardConfig: IFunnelBoardConfig;

  @ViewChild("funnelCardContainer", {read: ViewContainerRef, static: true}) funnelCardContainerRef : ViewContainerRef;
  @ViewChild("funnelCardTemplate", {static: true}) funnelCardTemplateRef : TemplateRef<any>;
  @ViewChild("perfomanceContainer", {read: ViewContainerRef, static: true}) perfomanceContainerRef : ViewContainerRef;
  @ViewChild("performanceTemplate", {static: true}) performanceTemplateRef : TemplateRef<any>;  

  ngOnInit(): void {
    this.getPerformanceData();
    this._constants.cardsArray[0].value = `${this.funnelBoardConfig.calls} / ${this.funnelBoardConfig.totalCalls}`;
    this._constants.cardsArray[1].value = `${this.funnelBoardConfig.wins} / ${this.funnelBoardConfig.totalwins}`;
    this._constants.cardsArray[2].value = `${this._roman.transform(this.funnelBoardConfig.revenue)} / ${this._roman.transform(this.funnelBoardConfig.totalrevenue)}`;
    for(var i=0; i<this._constants.cardsArray.length; i++) {
      this.funnelCardContainerRef.createEmbeddedView(this.funnelCardTemplateRef, {cardConfig: this._constants.cardsArray[i]})
    }
  }

  getPerformanceData() {
    this._service.getPerformanceData().subscribe((data)=>{
      this.setPerformanceData(data[this.funnelBoardConfig.timeline]);
    })
  }

  setPerformanceData(data) {
    this._constants.performanceConfig.performanceList = data;
    this.injectPerfromanceData();
  }

  injectPerfromanceData(isRemove?: boolean) {
    if(isRemove && this.perfomanceContainerRef.length > 0) {
      this.perfomanceContainerRef.clear();
    }
    this.perfomanceContainerRef.createEmbeddedView(this.performanceTemplateRef, {performanceConfig: this._constants.performanceConfig})
  }

  repSelected(data) {
    console.log(data);
  }

}
