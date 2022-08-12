import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CardService } from './cards/card.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from './payment.service';
import { TransactionPayload, CardInfo } from './transactionPayload.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [CardService]
})
export class PaymentComponent implements OnInit {

  @ViewChild('newPayment', {static: false}) newPayment: ElementRef;
  @ViewChild('modalSuccess', {static: false}) modalSuccess: ElementRef;
  @ViewChild('modalError', {static: false}) modalError: ElementRef;
  @Input() public id: number;
  @Input() public username: string;
  @Input() public user: string;
  @Input() public image: string;
  public modalRef: NgbModalRef;
  public cards: CardInfo[];
  public payForm: FormGroup;
  public payload: TransactionPayload;

  constructor(
    private modalService: NgbModal,
    private paymentService: PaymentService,
    private cardService: CardService,
    private formBuilder: FormBuilder
  ) {
    this.cards = this.cardService.getCards();
  }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      valuePayment: [null, Validators.required],
      card: ['', Validators.required]
    });
  }

  clickOn(): void {
    this.modalRef = this.modalService.open(this.newPayment);
    this.payload = {
      card: null,
      destination_user_id: this.id,
      value: null
    };
  }

  modalClose() {
    this.modalRef.close();
  }

  clickPay() {
    this.paymentService.payload(this.payload).subscribe(() => {
      this.modalRef.close();
      this.payload.card.card_number === '4111111111111234'
        ? this.modalRef = this.modalService.open(this.modalError)
        : this.modalRef = this.modalService.open(this.modalSuccess);
      console.log(this.payload);
    });
  }

}
