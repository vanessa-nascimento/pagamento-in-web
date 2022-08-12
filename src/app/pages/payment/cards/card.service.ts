import { Injectable } from '@angular/core';
import { CardInfo } from '../transactionPayload.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): CardInfo[] {
    return [
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18'
      },
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20'
      },
    ];
  }

}
