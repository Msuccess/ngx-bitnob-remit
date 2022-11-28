import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NgxBitnobService } from './ngx-bitnob.service';

const SCRIPT_PATH =
  'https://cdn.jsdelivr.net/gh/Msuccess/widget@master/bitnob-remittance.js';
declare let initializePayment: any;

@Component({
  selector: 'ngx-bitnob[publicKey][senderName][environment][callbackUrl]',
  template: ` <div class="hello">
    <button class="payButton" (click)="payWithBitnob()">
      <div
        class="img"
        [style.background-image]="'url(' + buttonImg + ')'"
      ></div>
      <p>{{ buttonTitle }}</p>
    </button>
  </div>`,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
      .payButton {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #031735;
        color: #ffffff;
        border: none;
        padding: 10px 30px;
        border-radius: 10px;
        cursor: pointer;
        font-family: 'Quicksand', sans-serif;
      }
      .img {
        width: 20px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 20px;
        margin-right: 10px;
      }
    `,
  ],
})
export class NgxBitnobComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private ngxBitnobService: NgxBitnobService
  ) {}

  @Input() publicKey: string = '';
  @Input() buttonTitle: string = 'Pay With Bitnob';
  @Input() buttonImg: string =
    'https://res.cloudinary.com/gabbyprecious/image/upload/v1650746449/cad8exitdhnparfqyfjf.png';
  @Input() callbackUrl: string = '';
  @Input() environment: string = 'sandbox';
  @Input() senderName: string = '';
  @Output() changed = new EventEmitter();

  payWithBitnob(): void {
    var data = {
      pk: this.publicKey,
      callbackUrl: this.callbackUrl,
      senderName: this.senderName,
    };

    initializePayment(data, this.environment);
  }

  @HostListener('window:GetPaymentDetails', ['$event'])
  onChanged(event: any) {
    this.changed.emit(event.detail);
  }

  ngOnInit() {
    const scriptElement = this.ngxBitnobService.loadJsScript(
      this.renderer,
      SCRIPT_PATH
    );
    scriptElement.onload = () => {
      console.log('Bitnob Script loaded');
    };
    scriptElement.onerror = () => {
      alert('Could not load the Bitnob Script!');
    };
  }
}
