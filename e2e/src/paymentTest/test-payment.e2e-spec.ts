import { PaymentCasesPage } from './test-payment.po';
import { browser, logging } from 'protractor';

describe('Tela inicial de listagem de usuários', () => {
  let paymentCasePage: PaymentCasesPage;

  beforeEach(() => {
    paymentCasePage = new PaymentCasesPage();
  });

  it('navega na página principal', () => {
    paymentCasePage.navigateTo();
  });

  it('clica no botão pagar', () => {
    expect(paymentCasePage.buttonPay().getText()).toEqual('Pagar');
    paymentCasePage.buttonPay().click();
  });

  it('preenche o form de pagamento com valor, cartão e clica em pagar', () => {
    expect(paymentCasePage.inputValuePayment(1000));
    expect(paymentCasePage.selectCardPayment('Cartão com final 1111'));
    paymentCasePage.clickPay().click();
  });

  it('mensagem de feedback', () => {
    expect(paymentCasePage.verifyPayment().getText()).toEqual('Pagamento Realizado');
    paymentCasePage.buttonReturn().click();
  });

  it('insere um nome no campo de pesquisa', () => {
    expect(paymentCasePage.validateSearch('Carol'));
  });

  it('clica no botão pagar', () => {
    expect(paymentCasePage.buttonPay().getText()).toEqual('Pagar');
    paymentCasePage.buttonPay().click();
  });

  it('preenche o form de pagamento com valor, cartão e clica em pagar', () => {
    expect(paymentCasePage.inputValuePayment(2000));
    expect(paymentCasePage.selectCardPayment('Cartão com final 1234'));
    paymentCasePage.clickPay().click();
  });

  it('mensagem de feedback', () => {
    expect(paymentCasePage.verifyPayment().getText()).toEqual('Aconteceu algo...');
    paymentCasePage.buttonReturn().click();
  });

  it('clicando no botão de baixar o aplicativo', () => {
    paymentCasePage.buttonApp().click();
  });
});
