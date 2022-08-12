import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransactionPayload } from './transactionPayload.model';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    baseUrl = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989';

    constructor(private http: HttpClient) { }

    payload(payload: TransactionPayload): Observable<TransactionPayload> {
        return this.http.post<TransactionPayload>(this.baseUrl, payload);
    }
}
