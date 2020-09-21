export interface IPerformanceConfig {
    performanceList: Array<ICardConfig>
}
export interface ICardConfig {
    id:number,
    salesRep: string,
    mrr: number,
    logos: number,
    calls: number,
    isMiddle: boolean,
    cardClass?: string
}