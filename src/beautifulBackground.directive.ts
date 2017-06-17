import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[zouBeautifulBackground]'
})

export class BeautifulBackgroundDirective{
  private _defaultColor = 'yellow';
  private el: HTMLElement;

  // @Input('zouBeautifulBackground') set backgroundClr(colorName: string){
  //   this.setStyle(colorName);
  // }
  @Input() set backgroundClr(colorName: string){
    this.setStyle(colorName);
  }
  constructor(el: ElementRef){
    // el.nativeElement.style.backgroundColor = 'yellow';
    this.el = el.nativeElement;
    this.setStyle(this._defaultColor);
  }

  private setStyle(color: string){
    this.el.style.backgroundColor = color;
  }
}
