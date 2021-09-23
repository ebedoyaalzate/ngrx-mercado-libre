import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { UnauthRoutingModule } from './unauth-routing.module';
import { UnauthComponent } from './unauth.component';


@NgModule({
  declarations: [
    UnauthComponent
  ],
  imports: [
    CommonModule,
    UnauthRoutingModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [UnauthComponent]
})
export class UnauthModule { }
