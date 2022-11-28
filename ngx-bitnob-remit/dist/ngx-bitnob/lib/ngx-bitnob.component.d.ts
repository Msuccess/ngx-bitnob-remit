import { EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NgxBitnobService } from './ngx-bitnob.service';
import * as i0 from "@angular/core";
export declare class NgxBitnobComponent implements OnInit {
    private renderer;
    private ngxBitnobService;
    constructor(renderer: Renderer2, ngxBitnobService: NgxBitnobService);
    publicKey: string;
    buttonTitle: string;
    buttonImg: string;
    callbackUrl: string;
    environment: string;
    senderName: string;
    changed: EventEmitter<any>;
    payWithBitnob(): void;
    onChanged(event: any): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxBitnobComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxBitnobComponent, "ngx-bitnob[publicKey][senderName][environment][callbackUrl]", never, { "publicKey": "publicKey"; "buttonTitle": "buttonTitle"; "buttonImg": "buttonImg"; "callbackUrl": "callbackUrl"; "environment": "environment"; "senderName": "senderName"; }, { "changed": "changed"; }, never, never, false>;
}
