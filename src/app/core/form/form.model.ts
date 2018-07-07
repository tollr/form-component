import { Validators } from '@angular/forms';

export const baseForm = {
  code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  libelleCourt: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  // libelleLong: ['', [Validators.max(250)]],
  // description: [],
  // mutualisable: [],
};
