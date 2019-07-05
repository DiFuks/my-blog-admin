import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RootRoutingModule } from '@app/root/root-routing.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
  ],
  exports: [
    RootComponent
  ]
})
export class RootModule { }
