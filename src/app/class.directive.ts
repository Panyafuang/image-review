import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private elementRef: ElementRef) {
  }

  /**
   * classObj:any = { disabled: currentPage === 0 }
   * key = disabled
   * classObj[key] = true, false (value of key)
   */
  @Input('appClass') set className(classObj: any) {
    for(let key in classObj) {
      // console.log(key); // disabled
      // console.log(classObj); // {disabled: true}
      // console.log(classObj[key]); // true or false

      if(classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }

}
