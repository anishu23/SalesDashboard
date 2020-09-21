export interface IDetailsTableConfig {
    headers: Array<IHeader>;
    rows: Array<IRow>;
}

export interface IHeader {
    id: number;
    name: string;
}

export interface IRow {
    isOdd?: boolean;
    won?: boolean;
    lost?: boolean;
    data: Array<IRowData>
}

export interface IRowData {
    id: number;
    data: any;
    
}