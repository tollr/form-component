import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '../../../../../node_modules/@angular/forms';

export const alphaNumeric = Validators.pattern(/^[a-zA-Z0-9\-]*$/);

@Component({
  selector: 'app-code',
  template: `
      <mat-form-field class="example-full-width" [formGroup]="parent">
      <input
      matInput
      type="text"
      [placeholder]="label"
      [formControlName]="name">
      <mat-hint>Ceci est une indice pour le champ</mat-hint>
    </mat-form-field>
  `,
})
export class CodeComponent {
  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() label: string;
}
