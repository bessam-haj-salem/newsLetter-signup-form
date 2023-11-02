import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  success: boolean = false;
  dismiss() {
    this.success = false;
  }
  onValidation(success: boolean): void {
    this.success = success;
  }
}
