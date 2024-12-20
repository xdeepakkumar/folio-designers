import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import spinner module

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule, // Import spinner module
  ],
  template: `
    <section class="forgot-password-section">
      <!-- Full-page spinner overlay -->
      <div *ngIf="loading" class="overlay">
        <mat-spinner diameter="50"></mat-spinner>
      </div>

      <mat-card class="forgot-password-card">
        <mat-card-header>
          <mat-card-title class="mat-h4">Forgot Password</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <!-- Form content, will be visible even with the spinner active -->
          <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <input
                matInput
                type="email"
                formControlName="email"
                placeholder="Enter your email"
                class="form-control"
                required
              />
              <!-- Error message for invalid email -->
              <div
                *ngIf="
                  forgotPasswordForm.get('email')?.invalid &&
                  forgotPasswordForm.get('email')?.touched
                "
                class="error-message"
              >
                <small
                  *ngIf="forgotPasswordForm.get('email')?.hasError('required')"
                >
                  Email is required.
                </small>
                <small
                  *ngIf="forgotPasswordForm.get('email')?.hasError('email')"
                >
                  Please enter a valid email address.
                </small>
              </div>
            </div>

            <div class="form-group">
              <button
                mat-raised-button
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                type="submit"
                [disabled]="forgotPasswordForm.invalid || loading"
                class="forgot-password-button"
              >
                Reset Password
              </button>
            </div>
          </form>

          <div class="sign-in-link text-muted">
            <h5>
              Remember your password?
              <a href="/sign-in" class="sign-in">Sign In</a>
            </h5>
          </div>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  styles: [
    `
      .forgot-password-section {
        padding: 20px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 75vh; /* Cover full height of the screen */
        background-color: #f4f4f4;
        position: relative; /* Ensures overlay is positioned correctly */
      }

      .forgot-password-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        position: relative; /* Keep card's content in front of the spinner */
        z-index: 1;
      }

      .forgot-password-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .forgot-password-card mat-card-title {
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

      .forgot-password-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

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

      .error-message {
        color: red;
        font-size: 0.875rem;
        margin-top: 5px;
      }

      .error-message small {
        display: block;
      }

      /* Full-page spinner overlay */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5); /* Light overlay background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure overlay covers everything else */
      }
    `,
  ],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading: boolean = false; // Flag to show the full-page spinner

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Handle form submission and make API call
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.loading = true; // Set loading to true when submitting the form

      const email = this.forgotPasswordForm.value.email;
      this.resetPassword(email).subscribe({
        next: (response) => {
          console.log('Password reset request successful:', response);
          this.showMessage(response.message, 'success');
        },
        error: (error) => {
          console.error('Error sending password reset request:', error);
          this.showMessage(
            'An error occurred while sending the password reset request.',
            'error'
          );
        },
        complete: () => {
          this.loading = false; // Set loading to false once the request is complete
        },
      });

      this.forgotPasswordForm.reset();
    }
  }

  // API call function
  resetPassword(email: string): Observable<any> {
    const apiUrl = `http://localhost:8080/api/v1/auth/forgotPassword/${email}`;
    return this.http.get<any>(apiUrl, {});
  }

  // Function to display messages using MatSnackBar
  showMessage(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 4000,
      panelClass: type === 'success' ? 'success-snack' : 'error-snack',
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
