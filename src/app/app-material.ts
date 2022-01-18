import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {OverlayModule} from '@angular/cdk/overlay';








@NgModule({
  exports: [
    MatMenuModule,
    OverlayModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class appmaterial { }