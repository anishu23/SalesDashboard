import { Component, OnInit, ViewContainerRef, TemplateRef, ViewChild, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ITabbedHeaderConfig, ITabConfig } from './config/ITabbedConfig.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabHeaderComponent implements OnInit {

  @ViewChild("tabContainer", {read: ViewContainerRef, static: true}) tabContainerRef : ViewContainerRef;
  @ViewChild("tabTemplate", {static: true}) tabTemplateRef : TemplateRef<any>;

  @Input('config')  tabbedHeaderConfig: ITabbedHeaderConfig;
  @Output('change') onTabClicked = new EventEmitter<ITabConfig>();

  constructor() { }

  ngOnInit(): void {
    if(this.tabbedHeaderConfig.tabs.length > 0) {
      for(var i=0; i<this.tabbedHeaderConfig.tabs.length; i++) {
        this.tabContainerRef.createEmbeddedView(this.tabTemplateRef, {tabConfig: this.tabbedHeaderConfig.tabs[i]})
        if(this.tabbedHeaderConfig.tabs[i].isSelected) {
          this.setSelectedTab(this.tabbedHeaderConfig.tabs[i].tabId);
        }
      }
    }
  }
  
  tabClicked(tab: ITabConfig) {
    this.setSelectedTab(tab.tabId);
    this.onTabClicked.emit(tab);
  }

  setSelectedTab(tabId: number) {
    for(var i=0; i<this.tabbedHeaderConfig.tabs.length; i++) {
      if(this.tabbedHeaderConfig.tabs[i].tabId == tabId) {
        this.tabbedHeaderConfig.tabs[i].isSelected = true;
        this.tabbedHeaderConfig.tabs[i].selectedClass = 'tabSelected';
      } else {
        this.tabbedHeaderConfig.tabs[i].isSelected = false;
        this.tabbedHeaderConfig.tabs[i].selectedClass = 'tabUnselected';
      }
    }
  }
}
