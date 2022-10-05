import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCouleur]'
})
export class CouleurDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }
  @Input("appCouleur")
  set colorCompteur(value:string){
    if(parseInt(value) < 1 && parseInt(value)>= 0){
      this._renderer.setStyle(this._el.nativeElement, 'color', 'red')
    }else if(parseInt(value) > 2){
      this._renderer.setStyle(this._el.nativeElement, 'color', 'yellow')
    }
  }
}
