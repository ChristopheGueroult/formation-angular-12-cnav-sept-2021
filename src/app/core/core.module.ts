import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GabaritsPagesModule } from '../gabarits-pages/gabarits-pages.module';
import { IconsModule } from '../icons/icons.module';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UiModule,
    LoginModule,
    IconsModule,
    GabaritsPagesModule
  ]
})
export class CoreModule { }
