import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { IPerformanceConfig } from './config/IPerformanceConfig.interface';
import { PerformanceConstants } from './performance.constants';
import * as _ from 'lodash';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  @ViewChild("perfomanceSortHeaderContainer", {read: ViewContainerRef, static: true}) perfomanceSortHeaderContainerRef : ViewContainerRef;
  @ViewChild("perfomanceSortHeaderTemplate", {static: true}) perfomanceSortHeaderTemplateRef : TemplateRef<any>;
  @ViewChild("performanceCardContainer", {read: ViewContainerRef, static: true}) performanceCardContainerRef : ViewContainerRef;
  @ViewChild("performanceCardTemplate", {static: true}) performanceCardTemplateRef : TemplateRef<any>;

  @Input('config') performanaceConfig: IPerformanceConfig;
  constructor(private _constants: PerformanceConstants) { }

  ngOnInit(): void {
    this.perfomanceSortHeaderContainerRef.createEmbeddedView(this.perfomanceSortHeaderTemplateRef, {perfSortConfig: this._constants.perfConfig})
    var sortedData = this.getTopThreeData();
    this.injectPerformanceModuleWithData(sortedData);
  }

  onSortChange(data) {
    switch(data.id) {
      case 'bottom': 
        var sortedData = this.getBottomThreeData();
        this.injectPerformanceModuleWithData(sortedData, true);
        break;
      case 'top':
        var sortedData = this.getTopThreeData();
        this.injectPerformanceModuleWithData(sortedData, true);
        break;
    }
  }

  getTopThreeData() {
    var sortedData = _.orderBy(this.performanaceConfig.performanceList, ['mrr'], ['desc']);
    var top3 = sortedData.slice(0, 3);
    top3[0].isTop = true;
    top3[1].isMiddle = true;
    top3[2].isBottom = true;

    return top3;
  }

  getBottomThreeData() {
    var sortedData = _.orderBy(this.performanaceConfig.performanceList, ['mrr'], ['asc']);
    var bottom3 = sortedData.slice(0, 3);
    bottom3[0].isTop = true;
    bottom3[1].isMiddle = true;
    bottom3[2].isBottom = true;
    return bottom3;
  }

  injectPerformanceModuleWithData(data: any, isRemove?: boolean) {
    if(isRemove && this.performanceCardContainerRef.length > 0) {
      this.performanceCardContainerRef.clear();
    }
    if(data.length > 0) {
      for(var i=0; i<data.length; i++) {
        this.performanceCardContainerRef.createEmbeddedView(this.performanceCardTemplateRef, {cardConfig: data[i]})
      }
    }
  }
}
