import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CallbackRoutingModule } from './callback-routing.module';
import { CallbackComponent } from './callback.component';


@NgModule({
  declarations: [
    CallbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CallbackRoutingModule
  ]
})
export class CallbackModule { }
