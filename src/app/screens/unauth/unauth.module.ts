import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';

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
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [UnauthComponent]
})
export class UnauthModule { }
