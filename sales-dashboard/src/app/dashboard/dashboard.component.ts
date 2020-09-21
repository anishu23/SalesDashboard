import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { DashboardConstants } from './dashboard.constants';
import { DashboardService } from './dashboard.service';
import { ETimelines, EStatus } from './config/dashboard.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("timelineHeaderContainer", {read: ViewContainerRef, static: true}) timelineHeaderContainerRef : ViewContainerRef;
  @ViewChild("timelineHeaderTemplate", {static: true}) timelineHeaderTemplateRef : TemplateRef<any>;
  @ViewChild("funnelBoardContainer", {read: ViewContainerRef, static: true}) funnelBoardContainerRef : ViewContainerRef;
  @ViewChild("funnelBoardTemplate", {static: true}) funnelBoardTemplateRef : TemplateRef<any>;
  @ViewChild("detailsTableContainer", {read: ViewContainerRef, static: true}) detailsTableContainerRef : ViewContainerRef;
  @ViewChild("detailsTableTemplate", {static: true}) detailsTableTemplateRef : TemplateRef<any>;

  constructor(private _constants: DashboardConstants, private _service: DashboardService) { }

  ngOnInit(): void {
    this.timelineHeaderContainerRef.createEmbeddedView(this.timelineHeaderTemplateRef, {timelineConfig: this._constants.timelineConfig});
    this.getFunnelData(ETimelines.daily);
    this.getDetailsTableData()
  }

  onTimelineChange(tab) {
    switch(tab.id) {
      case ETimelines[1]:
        this.getFunnelData(ETimelines.daily, true);
        break;
      case ETimelines[2]:
        this.getFunnelData(ETimelines.weekly, true);
        break;
      case ETimelines[3]:
        this.getFunnelData(ETimelines.monthly, true);
        break;
      case ETimelines[4]:
        this.getFunnelData(ETimelines.quarterly, true);
        break;
      case ETimelines[5]:
        this.getFunnelData(ETimelines.annually, true);
        break;
    }
  }

  getFunnelData(timeline: ETimelines, isRemove?: boolean) {
    this._service.getFunnelData().subscribe((data)=>{
      this._constants.funnelBoardConfig.timeline = ETimelines[timeline];
      this.setFunnelData(data[ETimelines[timeline]]);
      this.injectFunnelModule(isRemove);
    })
  }
  
  setFunnelData(data) {
    Object.keys(data).forEach(key => {
      this._constants.funnelBoardConfig[key] = data[key];
    })
  }
  injectFunnelModule(isRemove?: boolean) {
    if(isRemove && this.funnelBoardContainerRef.length > 0) {
      this.funnelBoardContainerRef.clear();
    }
    this.funnelBoardContainerRef.createEmbeddedView(this.funnelBoardTemplateRef, {funnelBoardConfig: this._constants.funnelBoardConfig})
  }

  getDetailsTableData() {
    this._service.getCallDetails().subscribe((data)=>{
      this.setDetailsData(data);
      this.injectDetailsTableModule();
    })
  }

  setDetailsData(data) {
    for(var i=0; i<data.length; i++) {
      var rowOject = {won: false, lost: false, data: []};
      if(data[i].status == EStatus[1]) {
        rowOject.won = true;
      } else if(data[i].status == EStatus[0]) {
        rowOject.lost = true;
      }
      Object.keys(data[i]).forEach((key, index) => {
        if(key != 'id') {
          var dataObject = {id: 0, data: ""};
          dataObject.id = index;
          dataObject.data = data[i][key];
          if(key == 'date') {
            dataObject.data = new Date(data[i][key]).toLocaleString();
          }
          rowOject.data.push(dataObject);
        }
      })
      this._constants.detailsTableData.rows.push(rowOject);
    }
  }

  injectDetailsTableModule() {
    this.detailsTableContainerRef.createEmbeddedView(this.detailsTableTemplateRef, {detailsConfig: this._constants.detailsTableData});
  }

}
