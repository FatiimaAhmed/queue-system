import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[componentInjector]'
})
export class InjectorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
