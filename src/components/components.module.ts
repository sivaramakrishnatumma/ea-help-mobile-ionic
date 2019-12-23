import { NgModule } from "@angular/core";
import { TitleCardComponent } from "./title-card/title-card";
import { IonicModule } from "ionic-angular";
import { TitleTileComponent } from "./title-tile/title-tile";
@NgModule({
  declarations: [TitleCardComponent, TitleTileComponent],
  imports: [IonicModule],
  exports: [TitleCardComponent, TitleTileComponent]
})
export class ComponentsModule {}
