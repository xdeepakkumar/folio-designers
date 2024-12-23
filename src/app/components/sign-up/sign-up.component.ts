import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBar
import { HttpClient } from '@angular/common/http'; // Import HttpClient

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router'; // For navigation
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSpinner,
} from '@angular/material/progress-spinner'; // For spinner

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  template: `
    <section class="sign-up-section">
      <mat-card class="sign-up-card">
        <mat-card-header>
          <mat-card-title class="mat-h2"> Sign Up</mat-card-title>
        </mat-card-header>

        <!-- Spinner overlay -->
        <div *ngIf="isLoading" class="overlay">
          <mat-spinner diameter="60"></mat-spinner>
        </div>

        <mat-card-content>
          <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <div class="form-group">
                <input
                  matInput
                  type="text"
                  formControlName="fullName"
                  placeholder="Name"
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
                class="sign-up-button"
                type="submit"
                [disabled]="signUpForm.invalid"
              >
                <i class="fa fa-user-plus"></i>
                Sign Up
              </button>
            </div>
          </form>

          <div class="divider">
            <span>OR</span>
          </div>

          <div class="google-signup">
            <a mat-stroked-button class="google-button" color="warn">
              <i class="fa fa-google"></i> Continue with Google
            </a>
          </div>

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
      /* Google Sign Up Button */
      .google-signup {
        text-align: center;
      }

      .google-button {
        width: 100%; /* Make the button 100% width */
        padding: 12px; /* Same padding as the Sign Up button */
        font-size: 12px; /* Match the font size of the Sign Up button */
        background-color: #db4437; /* Google's signature red color */
        color: white !important;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease-in-out;
      }

      .google-button:hover {
        background-color: #c1351d; /* Darker shade of red on hover */
      }

      .google-button i {
        margin-right: 5px; /* Space between the icon and text */
      }

      .sign-up-section {
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 75vh;
      }

      .sign-up-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        border-radius: 8px;
        background-color: white;
        position: relative; /* Make the card relative for overlay positioning */
      }

      .sign-up-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .sign-up-card mat-card-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #333;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group input {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      .form-group input:focus {
        border-color: #16a085;
        outline: none;
      }

      /* Sign Up Button */
      .sign-up-button {
        width: 100%;
        padding: 12px;
        font-size: 12px;
        background: linear-gradient(135deg, #16a085, #732d91);
        color: white !important;
        text-transform: uppercase;
        border: none;
        border-radius: 4px;
        transition: background-color 0.3s ease-in-out;
      }

      .sign-up-button:hover {
        background-color: #16a085;
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

      /* Full-page spinner overlay */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7); /* Lighter overlay background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure overlay covers everything else */
      }

      mat-spinner {
        width: 80px !important; /* Set the spinner size to 80px */
        height: 80px !important; /* Set the spinner size to 80px */
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
          padding: 10px;
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
          padding: 8px;
        }

        .sign-up-button {
          padding: 8px;
        }
      }
    `,
  ],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  isLoading = false; // Track loading state

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Inject HttpClient
    private snackBar: MatSnackBar, // Inject MatSnackBar
    private router: Router // For navigation after successful sign-up
  ) {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.isLoading = true; // Show loading spinner

      const requestBody = {
        name: this.signUpForm.value.fullName,
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password,
        email: this.signUpForm.value.email,
      };

      this.http
        .post('http://localhost:8080/api/v1/user/register', requestBody)
        .subscribe(
          (response: any) => {
            this.isLoading = false; // Stop loading spinner

            const successMessage =
              response?.message || 'Registration successful!';
            this.snackBar.open(successMessage, 'Close', {
              duration: 4000,
              panelClass: ['success-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });

            this.router.navigate(['/verify-email']);
          },
          (error) => {
            this.isLoading = false; // Stop loading spinner

            const errorMessage =
              error?.error?.message ||
              'An error occurred while registering. Please try again.';
            this.snackBar.open(errorMessage, 'Close', {
              duration: 4000,
              panelClass: ['error-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });

            console.error(error);
          }
        );
    }
  }
}
