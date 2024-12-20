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
import { Router, RouterLink } from '@angular/router'; // For navigation
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // For spinner

@Component({
  selector: 'app-verify-otp',
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
    <section class="verify-otp-section">
      <mat-card class="verify-otp-card">
        <mat-card-header>
          <mat-card-title class="mat-h2">Verify Email</mat-card-title>
        </mat-card-header>
        <!-- Spinner overlay -->
        <div *ngIf="isLoading" class="overlay">
          <mat-spinner diameter="80"></mat-spinner>
        </div>

        <!-- Sub-header with proper alignment and margin -->
        <p class="sub-header">
          Email verification is required to complete the registration process.
        </p>

        <mat-card-content>
          <form [formGroup]="verifyOtpForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input
                matInput
                type="email"
                formControlName="email"
                placeholder="Enter your email"
                class="form-control"
                required
              />
            </div>
            <div class="form-group">
              <input
                matInput
                type="text"
                formControlName="code"
                placeholder="Enter OTP"
                class="form-control"
                required
              />
            </div>

            <div class="form-group">
              <button
                mat-raised-button
                class="verify-otp-button"
                type="submit"
                [disabled]="verifyOtpForm.invalid"
              >
                Verify OTP
              </button>
            </div>
          </form>

          <div class="sign-in-link text-muted">
            <h5>
              Didn't receive the OTP?
              <a routerLink="/varify-email" class="resend-otp" (click)="resendOtp()">
                Resend OTP
              </a>
            </h5>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      /* Card section styling */
      .verify-otp-section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 79vh;
        background-color: #f4f4f4;
      }

      .verify-otp-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: white;
        position: relative;
      }

      .verify-otp-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .verify-otp-card mat-card-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: #333;
      }

      .sub-header {
        text-align: center;
        font-size: 11px;
        color: #777;
        margin-top: -28px;
        margin-bottom: 25px;
        margin-left: 10px;
      }

      .form-group {
        margin-bottom: 20px;
      }

      .form-group input {
        width: 100%;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      .form-group input:focus {
        border-color: #16a085;
        outline: none;
      }

      .verify-otp-button {
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

      .verify-otp-button:hover {
        background-color: #16a085;
      }

      .sign-in-link {
        text-align: center;
        margin-top: 20px;
      }

      .resend-otp {
        color: #007bff;
        text-decoration: none;
      }

      .resend-otp:hover {
        text-decoration: underline;
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      mat-spinner {
        width: 80px !important;
        height: 80px !important;
      }
    `,
  ],
})
export class VerifyOtpComponent {
  verifyOtpForm: FormGroup;
  isLoading = false; // Track loading state

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.verifyOtpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Ensure code is numeric
    });
  }

  onSubmit() {
    console.log('Form Submitted!'); // Debugging line to ensure submission is triggered

    if (this.verifyOtpForm.valid) {
      this.isLoading = true; // Show loading spinner

      const requestBody = {
        email: this.verifyOtpForm.value.email,
        code: this.verifyOtpForm.value.code,
      };

      this.http
        .post('http://localhost:8080/api/v1/auth/verifyEmail', requestBody)
        .subscribe(
          (response: any) => {
            this.isLoading = false; // Hide loading spinner

            const successMessage =
              response?.message || 'OTP verified successfully!';
            this.snackBar.open(successMessage, 'Close', {
              duration: 4000,
              panelClass: ['success-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });

            // Navigate only if successful
            this.router.navigate(['/sign-in']); // Navigate to the desired route on success
          },
          (error) => {
            this.isLoading = false; // Hide loading spinner

            const errorMessage =
              error?.error?.message ||
              'An error occurred while verifying OTP. Please try again.';
            this.snackBar.open(errorMessage, 'Close', {
              duration: 4000,
              panelClass: ['error-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });

            console.error(error);

            // Do not navigate on error, stay on the current page
            // Optionally, you can reset the form or clear the OTP field
          }
        );
    } else {
      console.log('Form is invalid!'); // Log when form is invalid
    }
  }


  // Updated method for Resend OTP functionality with validation
  resendOtp() {
    if (this.verifyOtpForm.invalid) {
      console.log('Form is invalid, cannot resend OTP'); // Log validation failure
      this.snackBar.open(
        'Please enter a valid email and OTP before resending.',
        'Close',
        {
          duration: 4000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
      return; // Prevent further action if the form is invalid
    }

    console.log('Resending OTP...'); // Debugging line
    this.isLoading = true; // Show loading spinner while making API call

    const requestBody = {
      email: this.verifyOtpForm.value.email,
      code: this.verifyOtpForm.value.code, // Use the code that was already entered by the user
    };

    this.http
      .post('http://localhost:8080/api/v1/auth/resendOtp', requestBody)
      .subscribe(
        (response: any) => {
          this.isLoading = false; // Hide loading spinner

          const successMessage =
            response?.message || 'OTP resent successfully!';
          this.snackBar.open(successMessage, 'Close', {
            duration: 4000,
            panelClass: ['success-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });

          // No navigation on success unless needed
        },
        (error) => {
          this.isLoading = false; // Hide loading spinner

          const errorMessage =
            error?.error?.message || 'Failed to resend OTP. Please try again.';
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
