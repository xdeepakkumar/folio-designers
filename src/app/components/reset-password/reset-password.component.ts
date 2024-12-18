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
  ],
  template: `
    <div class="forgot-password-section">
      <div class="forgot-password-card">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Reset Password</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="password">New Password</label>
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
                <label for="confirmPassword">Confirm Password</label>
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
                [disabled]="resetPasswordForm.invalid"
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 8px 16px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
              >
                Reset Password
              </button>
            </form>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .forgot-password-section {
        padding: 12px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        background-color: #f4f4f4;
      }

      .forgot-password-card mat-card-header {
        text-align: center;
        margin-bottom: 20px;
      }

      .forgot-password-card mat-card-title {
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
    `,
  ],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  token: string = '';
  email: string = '';

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
      // Send the token and email as part of the URL path
      const password = this.resetPasswordForm.value.password;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;
      const url = `http://localhost:8080/api/v1/auth/updatePassword/${this.token}/${this.email}`;

      const payload = {
        password: password,
        confirmPassword: confirmPassword,
      };

      this.http.post(url, payload).subscribe(
        () => {
          this.snackBar.open('Password reset successfully!', 'Close', {
            duration: 4000,
            panelClass: ['success-snackbar'],
            horizontalPosition: 'right', // Align message to the right
            verticalPosition: 'top', // Align message to the top
          });
          this.router.navigate(['/home']);
        },
        (error) => {
          this.snackBar.open(
            'An error occurred while resetting the password. Please try again.',
            'Close',
            {
              duration: 4000,
              panelClass: ['error-snackbar'],
              horizontalPosition: 'right', // Align message to the right
              verticalPosition: 'top', // Align message to the top
            }
          );
          console.error(error);
        }
      );
    }
  }
}
