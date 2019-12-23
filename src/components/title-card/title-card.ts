import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProduct } from "../../types/ea-help.types";

/**
 * Generated class for the TitleCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "title-card",
  templateUrl: "title-card.html"
})
export class TitleCardComponent {
  @Input() item: IProduct;
  @Input() title: string;

  @Output() onSelect = new EventEmitter();

  constructor() {
    console.log("Hello TitleCardComponent Component");
  }

  public clickHandler() {
    this.onSelect.emit(this.item);
  }
}
