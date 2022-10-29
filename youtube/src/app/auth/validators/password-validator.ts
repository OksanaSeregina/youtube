import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.length < 8) {
      return { length: true };
    }

    if (!(/[A-Z]/.test(value) && /[a-z]/.test(value))) {
      return { letterCase: true };
    }

    if (!/\d/.test(value)) {
      return { numbers: true };
    }

    if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
      return { symbols: true };
    }

    return null;
  };
}
