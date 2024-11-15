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
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  template: `
    <section class="sign-up-section">
      <mat-card class="sign-up-card">
        <mat-card-header>
          <mat-card-title class="mat-h2">Sign Up</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
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
                type="email"
                formControlName="email"
                placeholder="Email"
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
              <input
                matInput
                type="text"
                formControlName="fullName"
                placeholder="Full Name"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="signUpForm.invalid"
                class="sign-up-button"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div class="divider">
            <span>OR</span>
          </div>

          <div class="google-signup">
            <a mat-flat-button color="warn" class="google-button">
              Sign-up with Google
            </a>
          </div>

          <!-- Sign In Link -->
          <div class="sign-in-link text-muted">
            <h5>
              Already have an account?
              <a href="/sign-in" class="sign-in">Sign In</a>
            </h5>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      .sign-up-section {
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f4f4f4;
      }

      .sign-up-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .sign-up-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .sign-up-card mat-card-title {
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

      /* Sign Up Button */
      .sign-up-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem; /* Reduced text size */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
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

      /* Google Sign Up Button */
      .google-signup {
        text-align: center;
      }

      .google-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        border-radius: 4px; /* Optional: Rounded corners */
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: normal;
      }

      .google-icon {
        margin-right: 10px;
        font-size: 1.4rem; /* Icon size adjustment */
      }

      /* Sign In Link */
      .sign-in-link {
        text-align: center;
        margin-top: 20px;
      }

      .sign-in {
        color: #007bff;
        text-decoration: none;
      }

      .sign-in:hover {
        text-decoration: underline;
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .sign-up-card {
          padding: 15px;
        }

        .sign-up-card mat-card-title {
          font-size: 1.5rem;
        }

        .form-group input {
          padding: 8px;
        }

        .sign-up-button {
          padding: 10px;
        }

        .google-button {
          padding: 10px;
        }
      }

      @media (max-width: 480px) {
        .sign-up-card mat-card-title {
          font-size: 1.25rem;
        }

        .form-group input {
          padding: 6px;
        }

        .sign-up-button {
          padding: 8px;
        }

        .google-button {
          padding: 8px;
        }
      }
    `,
  ],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('Form submitted', this.signUpForm.value);
      // Handle the sign-up logic here, e.g., create user in the backend.
      this.signUpForm.reset(); // Reset the form after submission
    }
  }
}
