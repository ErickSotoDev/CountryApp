import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input('placeholder1')
  public placeholder:string='';

  @Output()
  public sendValue=new EventEmitter<string>();

  search(value:string):void{
    this.sendValue.emit(value)
  }
}
