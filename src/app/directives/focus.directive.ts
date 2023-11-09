import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit():void {
    this.el.nativeElement.focus()
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
