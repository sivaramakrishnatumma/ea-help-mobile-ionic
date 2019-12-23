import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitlesListPage } from './titles-list';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    TitlesListPage,
  ],
  imports: [
    ComponentsModule,
    IonicStorageModule,
    PipesModule,
    IonicPageModule.forChild(TitlesListPage),
  ],
})
export class TitlesListPageModule {}
