import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lib2RoutingModule } from './lib2-routing.module';
import { Sample2Component } from './sample2/sample2.component';

@NgModule({
  imports: [
    CommonModule,
    Lib2RoutingModule
  ],
  declarations: [Sample2Component],
  exports: [Sample2Component]
})
export class Lib2Module { }
