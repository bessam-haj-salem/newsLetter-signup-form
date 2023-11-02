import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  @Output() success = new EventEmitter<boolean>();
  emailForm = new FormControl('', [Validators.required, Validators.email]);

  onSubmit(): void {
    if (this.emailForm.valid) {
      this.success.emit(true);
    } else {
      this.success.emit(false);
    }
  }
}
