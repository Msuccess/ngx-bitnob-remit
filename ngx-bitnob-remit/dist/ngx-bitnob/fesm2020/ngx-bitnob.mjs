import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, Inject, EventEmitter, Component, Input, Output, HostListener, NgModule } from '@angular/core';

class NgxBitnobService {
    constructor(document) {
        this.document = document;
    }
    /**
     * Append the JS tag to the Document Body.
     * @param renderer The Angular Renderer
     * @param src The path to the script
     * @returns the script element
     */
    loadJsScript(renderer, src) {
        const script = renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        renderer.appendChild(this.document.body, script);
        return script;
    }
}
NgxBitnobService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
NgxBitnobService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });

const SCRIPT_PATH = 'https://cdn.jsdelivr.net/gh/Msuccess/widget@master/bitnob-remittance.js';
class NgxBitnobComponent {
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
NgxBitnobComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobComponent, deps: [{ token: i0.Renderer2 }, { token: NgxBitnobService }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: NgxBitnobService }]; }, propDecorators: { publicKey: [{
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

class NgxBitnobModule {
}
NgxBitnobModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxBitnobModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobModule, declarations: [NgxBitnobComponent], exports: [NgxBitnobComponent] });
NgxBitnobModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxBitnobModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxBitnobComponent],
                    imports: [],
                    exports: [NgxBitnobComponent],
                }]
        }] });

/*
 * Public API Surface of ngx-bitnob
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxBitnobComponent, NgxBitnobModule, NgxBitnobService };
//# sourceMappingURL=ngx-bitnob.mjs.map
