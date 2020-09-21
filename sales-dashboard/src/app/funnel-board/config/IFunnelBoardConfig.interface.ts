export interface IFunnelBoardConfig {
    lead:number,
    contactMade:number,
    needsDefined:number,
    proposalmade:number,
    negotationsStarted:number,
    won:number,
    calls:number,
    totalCalls:number,
    wins:number,
    totalwins:number,
    revenue:number,
    totalrevenue:number
    salesRep: Array<ISalesRep>;
    timeline: ETimelines
}

export interface ISalesRep {
    name: string;
    id: number;
}

export enum ETimelines {
    daily=1,
    weekly=2,
    monthly=3,
    quarterly=4,
    annually=5
}