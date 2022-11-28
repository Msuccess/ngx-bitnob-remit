import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-bitnob-remit-example';
  paymentData: any;

  public getPaymentData(event: any): void {
    this.paymentData = event;
    console.log('================> Pay here:', event);
  }
}
