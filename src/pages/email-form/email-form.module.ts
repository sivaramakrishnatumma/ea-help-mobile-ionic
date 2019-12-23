import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailFormPage } from './email-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmailFormPage,
  ],
  imports: [
    ReactiveFormsModule,
    IonicPageModule.forChild(EmailFormPage),
  ],
})
export class EmailFormPageModule {}
