import { Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxBitnobService {
    private document;
    constructor(document: Document);
    /**
     * Append the JS tag to the Document Body.
     * @param renderer The Angular Renderer
     * @param src The path to the script
     * @returns the script element
     */
    loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxBitnobService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxBitnobService>;
}
