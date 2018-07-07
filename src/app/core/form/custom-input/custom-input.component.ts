import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

// fichier a part pour les regex
export const alphaNumeric = /^[a-zA-Z0-9\-]*$/;

@Component({
  selector: 'app-input',
  template:
  `
    <style>
      input.auto-uppercase {
        text-transform: uppercase;
      }
    </style>
    <mat-form-field class="example-full-width" [formGroup]="parent">
      <input
      matInput
      type="text"
      [placeholder]="label"
      [formControlName]="name"
      [name]="name"
      [class.auto-uppercase]="autoUppercase"
      >
      <!-- pour l'internationalisation passer les clés, voir pour le paramétrage, si c'est trop compliqué découpler les inputs par type -->
      <mat-hint>Ceci est un indice pour le champ</mat-hint>
      <mat-error *ngIf="parent.controls[name].errors && parent.controls[name].errors.required">Message required</mat-error>
      <mat-error *ngIf="parent.controls[name].errors && parent.controls[name].errors.pattern">Error pattern</mat-error>
      <mat-error *ngIf="parent.controls[name].errors &&
      (parent.controls[name].errors.minlength
      || parent.controls[name].errors.maxlength)">
      Error length
      </mat-error>
    </mat-form-field>
  `,
})
export class CustomInputComponent {
  @Input() parent: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() autoUppercase = false;
}

