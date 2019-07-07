import { Directive, ElementRef, Renderer, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';

  @HostBinding('style.backgroundColor') color;
  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor;
    this.changeColorTimer();
  }

  /*
  constructor(elRef: ElementRef, renderer: Renderer) {
    //elRef.nativeElement.style.backgroundColor = 'green';
    renderer.setElementStyle(elRef.nativeElement, 'background-color', 'green');  //Bessere Methode
  }
  */

  ngOnInit() {
    this.changeColorTimer();
  }

  changeColorTimer() {
    setTimeout(() => {
      this.color = 'red';
    }, 3000);
    this.color = this.defaultColor;
  }

}
