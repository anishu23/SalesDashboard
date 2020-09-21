import { Injectable } from "@angular/core";

@Injectable()
export class FunnelBoardConstants {
    public performanceConfig = {
        performanceList: [{
            "id":4,
            "salesRep": "Julia Cruise",
            "mrr": 3124,
            "logos":66,
            "calls":24,
            isTop: true
        },{
            "id":4,
            "salesRep": "Julia Cruise",
            "mrr": 3124,
            "logos":66,
            "calls":24,
            isMiddle: true
        },{
            "id":4,
            "salesRep": "Julia Cruise",
            "mrr": 3124,
            "logos":66,
            "calls":24,
            isBottom: true
        }]
    }

    public cardsArray = [{
        imgSrc: 'assets/ico-calls.png',
        title: 'CALLS',
        value: ""
      }, {
        isMiddle: true,
        imgSrc: 'assets/ico-wins.png',
        title: 'WINS',
        value: ""
      }, {
        imgSrc: 'assets/ico-revenue.png',
        title: 'INCREMENTED REVENUE',
        value: ""
    }];
      
}