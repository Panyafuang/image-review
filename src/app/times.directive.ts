import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();

    for(let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef,
        /** this obj. referred to as context obj. when we pass this context obj. it's going to make all the properties on this object available for aliasing inside of our directive. */
        {
          index: i,
          color: 'red'
        })
    }
  }
}
