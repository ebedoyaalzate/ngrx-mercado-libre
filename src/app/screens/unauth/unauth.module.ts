import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthComponent } from './unauth.component';
import { UnauthRoutingModule } from './unauth-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


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
