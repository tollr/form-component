import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { alphaNumeric} from '../core/form/code/code.component';

@Component({
  selector: 'app-oo-form',
  template: `
    <form [formGroup]="form">
      <app-code [parent]="form" name="code" label="Code" type="alphaNumeric"></app-code>
    </form>
  `,
  styleUrls: ['./oo-form.component.css']
})
export class OoFormComponent implements OnInit {
  // form = this.fb.group({
  //   name: {Validators.required}
  // });

  form = new FormGroup({
    code: new FormControl('', alphaNumeric)
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
