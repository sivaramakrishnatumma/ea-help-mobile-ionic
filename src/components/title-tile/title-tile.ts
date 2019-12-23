import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the TitleTileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'title-tile',
  templateUrl: 'title-tile.html'
})
export class TitleTileComponent {

  @Input() type: string;
  @Input() value: string;
  @Input() placeHolder: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello TitleTileComponent Component', this.value);
  }

  public clickHandler() {
    this.navCtrl.push('TitlesListPage', {type: this.type})
  }

}
