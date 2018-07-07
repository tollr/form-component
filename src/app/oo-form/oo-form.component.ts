import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { alphaNumeric} from '../core/form/custom-input/custom-input.component';
import { baseForm } from '../core/form/form.model';

@Component({
  selector: 'app-oo-form',
  template: `
    <form [formGroup]="form">
      <app-input [parent]="form" name="code" label="Code" type="alphaNumeric" [autoUppercase]="true"></app-input>
      <app-input [parent]="form" name="libelleCourt" label="Libellé Court"></app-input>
      <button mat-flat-button [disabled]="!form.valid">Click me!</button>
    </form>
    <br>
  `,
})
export class OoFormComponent implements OnInit {
  // possibilite d'override le template de formulaire par défaut
  form = this.fb.group({
    ...baseForm,
    code: ['', [Validators.pattern(alphaNumeric), Validators.required]]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.patchValue({
      code: 'ue-anglais-110'
    });
  }

}
