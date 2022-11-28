import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-bitnob.service";
const SCRIPT_PATH = 'https://cdn.jsdelivr.net/gh/Msuccess/widget@master/bitnob-remittance.js';
export class NgxBitnobComponent {
    constructor(renderer, ngxBitnobService) {
        this.renderer = renderer;
        this.ngxBitnobService = ngxBitnobService;
        this.publicKey = '';
        this.buttonTitle = 'Pay With Bitnob';
        this.buttonImg = 'https://res.cloudinary.com/gabbyprecious/image/upload/v1650746449/cad8exitdhnparfqyfjf.png';
        this.callbackUrl = '';
        this.environment = 'sandbox';
        this.senderName = '';
        this.changed = new EventEmitter();
    }
    payWithBitnob() {
        var data = {
            pk: this.publicKey,
            callbackUrl: this.callbackUrl,
            senderName: this.senderName,
        };
        initializePayment(data, this.environment);
    }
    onChanged(event) {
        this.changed.emit(event.detail);
    }
    ngOnInit() {
        const scriptElement = this.ngxBitnobService.loadJsScript(this.renderer, SCRIPT_PATH);
        scriptElement.onload = () => {
            console.log('Bitnob Script loaded');
        };
        scriptElement.onerror = () => {
            alert('Could not load the Bitnob Script!');
        };
    }
}
NgxBitnobComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobComponent, deps: [{ token: i0.Renderer2 }, { token: i1.NgxBitnobService }], target: i0.ɵɵFactoryTarget.Component });
NgxBitnobComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NgxBitnobComponent, selector: "ngx-bitnob[publicKey][senderName][environment][callbackUrl]", inputs: { publicKey: "publicKey", buttonTitle: "buttonTitle", buttonImg: "buttonImg", callbackUrl: "callbackUrl", environment: "environment", senderName: "senderName" }, outputs: { changed: "changed" }, host: { listeners: { "window:GetPaymentDetails": "onChanged($event)" } }, ngImport: i0, template: ` <div class="hello">
    <button class="payButton" (click)="payWithBitnob()">
      <div
        class="img"
        [style.background-image]="'url(' + buttonImg + ')'"
      ></div>
      <p>{{ buttonTitle }}</p>
    </button>
  </div>`, isInline: true, styles: ["@import\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\";.payButton{display:flex;justify-content:center;align-items:center;background-color:#031735;color:#fff;border:none;padding:10px 30px;border-radius:10px;cursor:pointer;font-family:Quicksand,sans-serif}.img{width:20px;background-position:center;background-size:contain;background-repeat:no-repeat;height:20px;margin-right:10px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-bitnob[publicKey][senderName][environment][callbackUrl]', template: ` <div class="hello">
    <button class="payButton" (click)="payWithBitnob()">
      <div
        class="img"
        [style.background-image]="'url(' + buttonImg + ')'"
      ></div>
      <p>{{ buttonTitle }}</p>
    </button>
  </div>`, styles: ["@import\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\";.payButton{display:flex;justify-content:center;align-items:center;background-color:#031735;color:#fff;border:none;padding:10px 30px;border-radius:10px;cursor:pointer;font-family:Quicksand,sans-serif}.img{width:20px;background-position:center;background-size:contain;background-repeat:no-repeat;height:20px;margin-right:10px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.NgxBitnobService }]; }, propDecorators: { publicKey: [{
                type: Input
            }], buttonTitle: [{
                type: Input
            }], buttonImg: [{
                type: Input
            }], callbackUrl: [{
                type: Input
            }], environment: [{
                type: Input
            }], senderName: [{
                type: Input
            }], changed: [{
                type: Output
            }], onChanged: [{
                type: HostListener,
                args: ['window:GetPaymentDetails', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJpdG5vYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYml0bm9iL3NyYy9saWIvbmd4LWJpdG5vYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7OztBQUd2QixNQUFNLFdBQVcsR0FDZix5RUFBeUUsQ0FBQztBQXdDNUUsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUNVLFFBQW1CLEVBQ25CLGdCQUFrQztRQURsQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFHbkMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLGlCQUFpQixDQUFDO1FBQ3hDLGNBQVMsR0FDaEIsNEZBQTRGLENBQUM7UUFDdEYsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVRwQyxDQUFDO0lBV0osYUFBYTtRQUNYLElBQUksSUFBSSxHQUFHO1lBQ1QsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ2xCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDNUIsQ0FBQztRQUVGLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQ3RELElBQUksQ0FBQyxRQUFRLEVBQ2IsV0FBVyxDQUNaLENBQUM7UUFDRixhQUFhLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO1FBQ0YsYUFBYSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDM0IsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0hBekNVLGtCQUFrQjtvR0FBbEIsa0JBQWtCLHdYQW5DbkI7Ozs7Ozs7O1NBUUg7NEZBMkJJLGtCQUFrQjtrQkFyQzlCLFNBQVM7K0JBQ0UsNkRBQTZELFlBQzdEOzs7Ozs7OztTQVFIOytIQWlDRSxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQWFQLFNBQVM7c0JBRFIsWUFBWTt1QkFBQywwQkFBMEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEJpdG5vYlNlcnZpY2UgfSBmcm9tICcuL25neC1iaXRub2Iuc2VydmljZSc7XG5cbmNvbnN0IFNDUklQVF9QQVRIID1cbiAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9Nc3VjY2Vzcy93aWRnZXRAbWFzdGVyL2JpdG5vYi1yZW1pdHRhbmNlLmpzJztcbmRlY2xhcmUgbGV0IGluaXRpYWxpemVQYXltZW50OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1iaXRub2JbcHVibGljS2V5XVtzZW5kZXJOYW1lXVtlbnZpcm9ubWVudF1bY2FsbGJhY2tVcmxdJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImhlbGxvXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInBheUJ1dHRvblwiIChjbGljayk9XCJwYXlXaXRoQml0bm9iKClcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCIndXJsKCcgKyBidXR0b25JbWcgKyAnKSdcIlxuICAgICAgPjwvZGl2PlxuICAgICAgPHA+e3sgYnV0dG9uVGl0bGUgfX08L3A+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgIC5wYXlCdXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTczNTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEJpdG5vYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5neEJpdG5vYlNlcnZpY2U6IE5neEJpdG5vYlNlcnZpY2VcbiAgKSB7fVxuXG4gIEBJbnB1dCgpIHB1YmxpY0tleTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGJ1dHRvblRpdGxlOiBzdHJpbmcgPSAnUGF5IFdpdGggQml0bm9iJztcbiAgQElucHV0KCkgYnV0dG9uSW1nOiBzdHJpbmcgPVxuICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9nYWJieXByZWNpb3VzL2ltYWdlL3VwbG9hZC92MTY1MDc0NjQ0OS9jYWQ4ZXhpdGRobnBhcmZxeWZqZi5wbmcnO1xuICBASW5wdXQoKSBjYWxsYmFja1VybDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGVudmlyb25tZW50OiBzdHJpbmcgPSAnc2FuZGJveCc7XG4gIEBJbnB1dCgpIHNlbmRlck5hbWU6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwYXlXaXRoQml0bm9iKCk6IHZvaWQge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgcGs6IHRoaXMucHVibGljS2V5LFxuICAgICAgY2FsbGJhY2tVcmw6IHRoaXMuY2FsbGJhY2tVcmwsXG4gICAgICBzZW5kZXJOYW1lOiB0aGlzLnNlbmRlck5hbWUsXG4gICAgfTtcblxuICAgIGluaXRpYWxpemVQYXltZW50KGRhdGEsIHRoaXMuZW52aXJvbm1lbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OkdldFBheW1lbnREZXRhaWxzJywgWyckZXZlbnQnXSlcbiAgb25DaGFuZ2VkKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmNoYW5nZWQuZW1pdChldmVudC5kZXRhaWwpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgc2NyaXB0RWxlbWVudCA9IHRoaXMubmd4Qml0bm9iU2VydmljZS5sb2FkSnNTY3JpcHQoXG4gICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgU0NSSVBUX1BBVEhcbiAgICApO1xuICAgIHNjcmlwdEVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0JpdG5vYiBTY3JpcHQgbG9hZGVkJyk7XG4gICAgfTtcbiAgICBzY3JpcHRFbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICBhbGVydCgnQ291bGQgbm90IGxvYWQgdGhlIEJpdG5vYiBTY3JpcHQhJyk7XG4gICAgfTtcbiAgfVxufVxuIl19