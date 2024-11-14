import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  template: `
    <section class="sign-in-section">
      <mat-card class="sign-in-card">
        <mat-card-header>
          <mat-card-title class="mat-h2">Sign In</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="signInForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input
                matInput
                type="text"
                formControlName="username"
                placeholder="Username"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <input
                matInput
                type="password"
                formControlName="password"
                placeholder="Password"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="signInForm.invalid"
                class="sign-in-button"
              >
                Sign In
              </button>
            </div>
          </form>

          <div class="divider">
            <span>OR</span>
          </div>

          <div class="google-login">
            <button mat-raised-button color="accent" class="google-button">
              <mat-icon class="google-icon">google</mat-icon> Login with Google
            </button>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      .sign-in-section {
        padding: 40px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        background-color: #f4f4f4;
      }

      .sign-in-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .sign-in-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .sign-in-card mat-card-title {
        font-size: 1.75rem;
        font-weight: 600;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      /* Sign In Button */
      .sign-in-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem; /* Reduced text size */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .divider {
        text-align: center;
        margin: 20px 0;
        font-size: 1rem;
        color: #333;
      }

      .divider span {
        background-color: #fff;
        padding: 0 10px;
        font-weight: bold;
      }

      /* Google Login Button */
      .google-login {
        text-align: center;
      }

      .google-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem; /* Adjusted font size */
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .google-icon {
        margin-right: 10px;
        font-size: 1.4rem; /* Adjusted icon size */
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .sign-in-card {
          padding: 15px;
        }

        .sign-in-card mat-card-title {
          font-size: 1.5rem;
        }

        .form-group input {
          padding: 8px;
        }

        .sign-in-button {
          padding: 10px;
        }

        .google-button {
          padding: 10px;
        }
      }

      @media (max-width: 480px) {
        .sign-in-card mat-card-title {
          font-size: 1.25rem;
        }

        .form-group input {
          padding: 6px;
        }

        .sign-in-button {
          padding: 8px;
        }

        .google-button {
          padding: 8px;
        }
      }
    `,
  ],
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form submitted', this.signInForm.value);
      // Handle the login logic here, e.g., authenticate with the backend.
      this.signInForm.reset(); // Reset the form after submission
    }
  }
}
