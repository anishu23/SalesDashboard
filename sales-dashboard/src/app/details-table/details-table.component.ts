import { Component, OnInit, Input, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { IDetailsTableConfig } from './config/IDetailsTableConfig.interface';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {
  
  @ViewChild("thContainer", {read: ViewContainerRef, static: true}) thContainerRef : ViewContainerRef;
  @ViewChild("thTemplate", {static: true}) thTemplateRef : TemplateRef<any>;
  @ViewChild("trContainer", {read: ViewContainerRef, static: true}) trContainerRef : ViewContainerRef;
  @ViewChild("trTemplate", {static: true}) trTemplateRef : TemplateRef<any>;
  @ViewChild("tdContainer", {read: ViewContainerRef, static: true}) tdContainerRef : ViewContainerRef;
  @ViewChild("tdTemplate", {static: true}) tdTemplateRef : TemplateRef<any>;

  @Input('config') tableConfig: IDetailsTableConfig;

  constructor() { }

  ngOnInit(): void {
    if(this.tableConfig.headers.length > 0) {
      for(var i=0; i<this.tableConfig.headers.length; i++) {
        this.thContainerRef.createEmbeddedView(this.thTemplateRef, {thData: this.tableConfig.headers[i].name})
      }
    }
    if(this.tableConfig.rows.length > 0) {
      for(var i=0; i<this.tableConfig.rows.length; i++) {
        if(i%2!=0) {
          this.tableConfig.rows[i].isOdd = true;
        }
        this.trContainerRef.createEmbeddedView(this.trTemplateRef, {trData: this.tableConfig.rows[i]})
      }
    }
  }

}
