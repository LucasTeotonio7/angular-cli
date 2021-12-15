import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.fontSize') fontSize: string = '';
  @HostBinding('style.textAlign') textAlign: string = '';
  @HostBinding('style.padding') padding: string = '';
  @HostBinding('style.trasition') trasition: string = '';
  @HostBinding('style.fontWeight') fontWeight: string = '';

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow';
    this.fontSize = '20px';
    this.textAlign = 'center';
    this.padding = '10px 0';
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = 'white';
      this.fontSize = '16px';
      this.textAlign = 'left';
      this.padding = '0';
      this.trasition = '0.5s';
      this.fontWeight = '400';
  }

  constructor() { }

}
