import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <div class="reset-password-section">
      <!-- Full-page overlay with spinner -->
      <div class="overlay" *ngIf="isLoading">
        <mat-spinner diameter="50"></mat-spinner>
      </div>

      <div class="reset-password-card">
        <mat-card style="min-width:400px; min-hight:400px;" class="pt-2 pb-2">
          <mat-card-header>
            <mat-card-title style="padding-bottom: 10px;"
              >Reset Password</mat-card-title
            >
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <input
                  type="password"
                  id="password"
                  formControlName="password"
                  placeholder="Enter your new password"
                />
                <div
                  class="error-message"
                  *ngIf="
                    resetPasswordForm.get('password')?.touched &&
                    resetPasswordForm.get('password')?.invalid
                  "
                >
                  Password is required (minimum 8 characters)
                </div>
              </div>

              <div class="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  formControlName="confirmPassword"
                  placeholder="Confirm your new password"
                />
                <div
                  class="error-message"
                  *ngIf="resetPasswordForm.hasError('passwordMismatch')"
                >
                  Passwords do not match
                </div>
              </div>

              <button
                type="submit"
                class="forgot-password-button"
                [disabled]="resetPasswordForm.invalid || isLoading"
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 8px 16px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
              >
                <i class="fa fa-refresh p-1"></i>
                Reset Password
              </button>
            </form>
            <div class="sign-in-link text-muted pt-3">
              <h5>
                Remember your password?
                <a href="/sign-in" class="sign-in">Sign In</a>
              </h5>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .reset-password-section {
        padding: 12px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        position: relative;
      }

      .reset-password-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .reset-password-card mat-card-title {
        font-size: 1.5rem;
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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      }

      .forgot-password-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .error-message {
        color: red;
        font-size: 0.875rem;
        margin-top: 5px;
      }

      /* Full-screen overlay with spinner */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5); /* Light transparent background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure overlay covers the entire screen */
      }

      /* Spinner styling */
      mat-spinner {
        color: #16a085;
      }
    `,
  ],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  token: string = '';
  email: string = '';
  isLoading = false; // To track the loading state

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.resetPasswordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  ngOnInit(): void {
    // Get the token and email from the route parameters
    this.token = this.route.snapshot.paramMap.get('token') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';

    // Only check the confirmPassword validation when the confirmPassword field is changed
    this.resetPasswordForm
      .get('confirmPassword')
      ?.valueChanges.subscribe(() => {
        this.resetPasswordForm.get('confirmPassword')?.updateValueAndValidity();
      });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.isLoading = true; // Set loading to true when the request is sent

      // Send the token and email as part of the URL path
      const password = this.resetPasswordForm.value.password;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;
      const url = `http://localhost:8080/api/v1/auth/updatePassword/${this.token}/${this.email}`;

      const payload = {
        password: password,
        confirmPassword: confirmPassword,
      };

      this.http.post(url, payload).subscribe(
        (response: any) => {
          this.isLoading = false; // Stop loader on success
          const successMessage =
            response.message || 'Password reset successfully!'; // Default to a fallback message
          this.snackBar.open(successMessage, 'Close', {
            duration: 4000,
            panelClass: ['success-snackbar'],
            horizontalPosition: 'right', // Align message to the right
            verticalPosition: 'top', // Align message to the top
          });
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLoading = false; // Stop loader on error
          const errorMessage =
            error.error?.message ||
            'An error occurred while resetting the password. Please try again.'; // Default error message
          this.snackBar.open(errorMessage, 'Close', {
            duration: 4000,
            panelClass: ['error-snackbar'],
            horizontalPosition: 'right', // Align message to the right
            verticalPosition: 'top', // Align message to the top
          });
          console.error(error);
        }
      );
    }
  }
}
