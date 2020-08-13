import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'blue';
  @Input() dStyles: {border?: string, fontWeight?: string};

  constructor(private el: ElementRef, private r: Renderer2) {

  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event: Element){
    console.log(event);
  }

  /* tslint:disable:typedef */
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
  }
  //
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
  }
  /* tslint:enable:typedef */

}
