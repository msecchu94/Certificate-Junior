import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-progress-spinner',
  templateUrl: './mat-progress-spinner.component.html',
  styleUrls: ['./mat-progress-spinner.component.scss']
})
export class MatProgressSpinnerComponent {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 5;
}
