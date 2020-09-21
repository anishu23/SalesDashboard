import { Injectable } from "@angular/core";

@Injectable()
export class DashboardConstants {
  constructor() { }
  public timelineConfig = {
      tabs: [{
        id: "daily",
        tabId: 1,
        title: "TODAY",
        isSelected: true
      },{
        id: "weekly",
        tabId: 2,
        title: "LAST WEEK",
        isSelected: false
      },{
        id: "monthly",
        tabId: 3,
        title: "LAST MONTH",
        isSelected: false
      },{
        id: "quarterly",
        tabId: 4,
        title: "THIS QUARTER",
        isSelected: false
      },{
        id: "annually",
        tabId: 5,
        title: "THIS YEAR",
        isSelected: false
      }]
  }

  public  funnelBoardConfig = {
      lead:25,
      contactMade:18,
      needsDefined:12,
      proposalmade:8,
      negotationsStarted:5,
      won:3,
      calls:10,
      totalCalls:15,
      wins:1,
      totalwins:3,
      revenue:80000,
      totalrevenue:100000,
      timeline: "",
      salesRep: [{
        id: 0,
        name: "All Sales Rep"
      },
      {
          id: 1,
          name: "John Doe"
      },{
          id: 2,
          name: "Ethan Hunt"
      },{
          id: 3,
          name: "Jane Doe"
      },{
          id: 4,
          name: "Julia Cruise"
      },{
          id: 5,
          name: "Tom Roberts"
      },{
          id: 6,
          name: "Jane Smith"
      },{
          id: 7,
          name: "Chris Stark"
      }]
  }
  public detailsTableData = {
    headers: [{
      id: 1,
      name: "Sales Rep" 
    },{
      id: 2,
      name: "Date" 
    },{
      id: 3,
      name: "Client" 
    },{
      id: 4,
      name: "Primary Contact Person" 
    },{
      id: 5,
      name: "Title" 
    },{
      id: 6,
      name: "Vertical" 
    },{
      id: 7,
      name: "Meeting Location" 
    },{
      id: 8,
      name: "Purpose of Interaction" 
    },{
      id: 9,
      name: "Outcome and Remarks" 
    },{
      id: 10,
      name: "Engagement Status" 
    }],
    rows: []     
  }
}