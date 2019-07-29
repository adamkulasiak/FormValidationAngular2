import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'signup-form',
  template: `
    <form (submit)="onSubmit()">
      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" class="form-control" [(ngModel)]="email" required>
      </div>
      <button type="submit" class="btn btn-primary">Rejestracja</button>
    </form>
  `
})
export class SignupFormComponent {

  email = '';

  onSubmit() {
    console.log('dziala ', this.email);
  }

}
