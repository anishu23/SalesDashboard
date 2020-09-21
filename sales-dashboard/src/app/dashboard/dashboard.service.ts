import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ETimelines } from './config/dashboard.config';

@Injectable()
export class DashboardService {
    constructor(private _http: HttpClient) {};

    public getFunnelData() {
        return this._http.get('http://localhost:3000/dashboardData')
    }

    public getCallDetails() {
        return this._http.get('http://localhost:3000/calldetails')
    }

}