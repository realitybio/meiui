import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { MuiInputComponent } from './mui-input/mui-input.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    MuiInputComponent
  ],
  imports: [
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
