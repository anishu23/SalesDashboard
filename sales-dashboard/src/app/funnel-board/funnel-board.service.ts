import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FunnelBoardService {

    constructor(private _http: HttpClient) {}
    
    getPerformanceData() {
        return this._http.get('http://localhost:3000/performance');
    }
}