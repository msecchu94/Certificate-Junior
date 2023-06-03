import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatProgressSpinnerComponent } from './components/mat-progress-spinner/mat-progress-spinner.component';

@NgModule({
  declarations: [
    MatProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    FlexLayoutModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MaterialModule,
    MatProgressSpinnerComponent
  ],
})
export class SharedModule {}
