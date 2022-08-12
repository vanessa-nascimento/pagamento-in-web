import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { PaymentService } from './payment.service';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        CurrencyMaskModule,
        HttpClientTestingModule,
        NgbModalModule
      ],
      declarations: [ PaymentComponent ],
      providers: [ PaymentService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const paymentService = TestBed.get(PaymentService);
    spyOn(paymentService, 'payload').and.returnValue(of([
      {
        card: {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18'
        },
        destination_user_id: 1001,
        value: 20
      }
    ]));
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create modal pay', fakeAsync(() => {
    const modalSpy = spyOn(component, 'clickOn').and.callThrough();
    const close = spyOn(component, 'modalClose').and.callThrough();
    expect(modalSpy).toBeDefined();
    expect(close).toBeDefined();
  }));

  it('should pay a user', () => {
    const fakeCard = {
      card: {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18'
      }
    };
    component.payForm.get('valuePayment').setValue(20);
    component.payForm.get('card').setValue(fakeCard);
    component.clickPay();
    expect(spyOn).toBeDefined();
  });
});
