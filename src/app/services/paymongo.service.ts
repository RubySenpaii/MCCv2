import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import url from '../../assets/json/url.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymongoService {

  constructor(private http: HttpClient) { }

  createPaymentIntent(paymentMethod, amount):Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Basic ' + btoa(environment.mongoKey)).set('Content-Type', 'application/json');
    const body = { "data": { "attributes": { "payment_method_allowed": [paymentMethod], "payment_method_options": { "card": { "request_three_d_secure": "automatic" } }, "currency": "PHP", "amount": amount } } };
    return this.http.post(url.paymongo.createIntent, body, { headers: header });
  }

  createPaymentMethod(paymentMethod, payment):Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Basic ' + btoa(environment.mongoKey)).set('Content-Type', 'application/json');
    const body = { "data": { "attributes": { "details": { "card_number": payment.cardNumber, "exp_month": payment.month, "exp_year": payment.year, "cvc": payment.cvc }, "type": paymentMethod } } };
    return this.http.post(url.paymongo.createPaymentMethod, body, { headers: header });
  }

  makePayment(intentId, paymentId):Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Basic ' + btoa(environment.mongoKey)).set('Content-Type', 'application/json');
    const body = { "data": { "attributes": { "payment_method": paymentId } } };
    return this.http.post(`${url.paymongo.makePayment}/${intentId}/attach`, body, { headers: header });
  }
}
