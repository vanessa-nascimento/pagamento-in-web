import { browser, element, by } from 'protractor';

export class PaymentCasesPage {
  navigateTo() {
    return browser.get('') as Promise<any>;
  }

  validateSearch(name) {
    return element(by.css('.input-search')).sendKeys(name);
  }

  buttonPay() {
    return element(by.css('.btn-pay'));
  }

  inputValuePayment(value) {
    return element(by.css('input[formControlName="valuePayment"]')).sendKeys(value);
  }

  selectCardPayment(cardOption) {
    return element(by.css('select')).click(),
     element(by.cssContainingText('option', cardOption)).click();
  }

  clickPay() {
    return element(by.css('.btn-feedback'));
  }

  verifyPayment() {
    return element(by.css('.modal-title'));
  }

  buttonReturn() {
    return element(by.css('.btn-return'));
  }

  buttonApp() {
    return element(by.css('.download-button'));
  }
}
