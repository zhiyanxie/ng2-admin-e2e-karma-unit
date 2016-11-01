import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewComponent } from './new.component';
import { routing } from './new.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NewComponent
  ]
})
export default class NewModule {
}
