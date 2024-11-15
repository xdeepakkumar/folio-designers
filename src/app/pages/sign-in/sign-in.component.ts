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

          <!-- Google Login Button (Flat) -->
          <div class="google-login">
            <button mat-flat-button color="warn" class="google-button">
              <!-- Google icon from Material Icons -->
              <mat-icon class="google-icon">google</mat-icon> Sign-in with
              Google
            </button>
          </div>

          <div class="sign-up-link text-muted">
            <h5>
              Don't have an account?
              <a href="/sign-up" class="sign-up">Sign Up</a>
            </h5>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      .sign-in-section {
        padding: 20px 10px;
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

      /* Google Login Button (Flat) */
      .google-login {
        text-align: center;
        margin-top: 20px;
      }

      .google-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem; /* Adjusted font size */
        border-radius: 4px; /* Optional: Rounded corners */
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .google-icon {
        margin-right: 10px;
        font-size: 1.4rem; /* Adjusted icon size */
      }

      /* Sign Up Link */
      .sign-up-link {
        text-align: center;
        margin-top: 20px;
      }

      .sign-up {
        color: #007bff;
        text-decoration: none;
      }

      .sign-up:hover {
        text-decoration: underline;
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
