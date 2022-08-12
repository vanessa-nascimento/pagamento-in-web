import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';

describe('CardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('deve ser criado', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });

  it('deve obter um objeto de cartões idêntico ao service', () => {
    const listCard = [
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
    const service: CardService = TestBed.get(CardService);

    expect(service.getCards()).toEqual(listCard);
    expect(service.getCards()[0].card_number).toEqual('1111111111111111');
    expect(service.getCards()[1].card_number).toEqual('4111111111111234');
  });
});
