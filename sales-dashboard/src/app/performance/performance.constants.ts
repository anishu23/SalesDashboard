import { Injectable } from '@angular/core';

@Injectable()
export class PerformanceConstants {
    constructor() {};

    public perfConfig = {
        tabs: [{
          id: "top",
          tabId: 1,
          title: "TOP",
          isSelected: true,
          customStyle: {'width': '50%'}
        },{
          id: "bottom",
          tabId: 2,
          title: "BOTTOM",
          isSelected: false,
          customStyle: {'width': '50%'}
        }]
    }
}