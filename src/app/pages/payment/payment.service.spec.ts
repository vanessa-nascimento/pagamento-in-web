import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
    let service: PaymentService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ PaymentService ]
        });

        service = TestBed.get(PaymentService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('deve ser criado', () => {
      expect(service).toBeTruthy();
    });

    it('deve criar um pagamento com sucesso', fakeAsync(() => {
      const fakePaymentSuccess = {
            card: {
              card_number: '1111111111111111',
              cvv: 789,
              expiry_date: '01/18'
            },
            destination_user_id: 1001,
            value: 10
          };

      service.payload(fakePaymentSuccess).subscribe(response => {
          expect(response).toEqual(fakePaymentSuccess);
      });

      const requestMock = httpMock.expectOne(request => {
          return request.method === 'POST';
      });

      requestMock.flush(fakePaymentSuccess);

      tick();
    }));

    it('deve criar um pagamento com erro', fakeAsync(() => {
      const fakePaymentError = {
            card: {
              card_number: '4111111111111234',
              cvv: 123,
              expiry_date: '01/20'
            },
            destination_user_id: 12321,
            value: 20
          };

      service.payload(fakePaymentError).subscribe(response => {
          expect(response).toEqual(fakePaymentError);
      });

      const reqMock = httpMock.expectOne(request => {
          return request.method === 'POST';
      });

      reqMock.flush(fakePaymentError);

      tick();
    }));
});
