import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[yellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'Yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    )
   }

}
