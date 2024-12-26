import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule, // Include MatProgressSpinnerModule here
    MatSnackBarModule,
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
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                type="submit"
                [disabled]="signInForm.invalid || isLoading"
                class="sign-in-button"
              >
                <i class="fa fa-sign-in"></i> Sign In
              </button>
            </div>
          </form>

          <div *ngIf="isLoading" class="spinner-container">
            <mat-progress-spinner
              mode="indeterminate"
              diameter="70"
              color="primary"
            ></mat-progress-spinner>
          </div>

          <div *ngIf="isLoading" class="overlay"></div>

          <div class="divider">
            <span>OR</span>
          </div>

          <div class="google-login">
            <button
              mat-flat-button
              color="warn"
              class="google-button"
              (click)="signInWithGoogle()"
            >
              <i class="fa fa-google"></i> Continue with Google
            </button>
          </div>

          <div class="sign-up-link text-muted mt-2">
            <h5>
              Don't have an account?
              <a href="/sign-up" class="sign-up">Sign Up</a>
            </h5>
          </div>

          <div class="forgot-password-link">
            <a href="/forget-password" class="forgot-password"
              >Forgot Password?</a
            >
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
        min-height: 79vh;
      }

      .sign-in-card {
        width: 100%;
        max-width: 400px;
        padding: 20px;
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

      .sign-in-button {
        width: 100%;
        padding: 12px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .divider {
        text-align: center;
        margin: 10px 0;
        font-size: 1rem;
        color: #333;
      }

      .divider span {
        background-color: #fff;
        padding: 0 10px;
        font-weight: bold;
      }

      .google-login {
        text-align: center;
        margin-top: 20px;
      }

      .google-button {
        width: 100%;
        padding: 12px;
        font-size: 12px;
        background-color: #db4437;
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
        background-color: #c1351d;
      }

      .forgot-password-link {
        text-align: right;
        margin-top: 10px;
        font-size: 12px;
      }

      .forgot-password {
        color: #007bff;
        text-decoration: none;
      }

      .forgot-password:hover {
        text-decoration: underline;
      }

      .spinner-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }

      .overlay {
        position: fixed; /* Fix the overlay to the screen, not the document */
        top: 0; /* Aligns it to the top of the viewport */
        left: 0; /* Aligns it to the left of the viewport */
        width: 100vw; /* Full width of the viewport (use vw for exact width) */
        height: 100vh; /* Full height of the viewport (use vh for exact height) */
        background: rgba(
          135,
          135,
          135,
          0.2
        ); /* Light gray overlay with 20% opacity */
        z-index: 1000; /* Ensures it’s on top of other content */
      }

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
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  isLoading: boolean = false; // Flag for loading state
  logInWithGoogle = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.handleRedirect();
  }

  onSubmit(): void {
    if (this.signInForm.invalid) return;

    this.isLoading = true; // Show spinner
    const formData = this.signInForm.value;
    const body = {
      username: formData.username,
      password: formData.password,
    };

    // API call to backend for sign-in
    this.http
      .post<any>('http://localhost:8080/api/v1/auth/sign-in', body)
      .subscribe(
        (response) => {
          this.isLoading = false; // Stop spinner

          if (response.response.length > 0) {
            const token = response.response[0]?.token;
            if (token) {
              // Store token in session storage
              sessionStorage.setItem('token', token);

              // Call the Get API to fetch user info
              this.getUserInfo(token);
            }
          }
        },
        (error) => {
          this.isLoading = false; // Stop spinner

          // Show error message in snackbar
          const errorMessage =
            error.error?.message ||
            'An error occurred while processing your request.';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
        }
      );
  }

  // Method to fetch user details using the token
  getUserInfo(token: string): void {
    if (!token) {
      this.handleError('No token provided');
      return;
    }

    // Set the authorization header with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Use POST request to send the token and get user info (with Authorization header)
    this.http
      .post<any>('http://localhost:8080/api/v1/auth/user-info', {}, { headers }) // POST request with headers
      .subscribe(
        (userInfo) => {
          if (userInfo) {
            // Store user details in sessionStorage (or localStorage for persistence across sessions)
            sessionStorage.setItem('userinfo', JSON.stringify(userInfo));

            // Notify the user that everything is okay
            this.snackBar.open('Signed in successfully', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });

            // Navigate to the home page after storing the user info
            this.router.navigate(['/home']);
          } else {
            this.handleError('Invalid user info received');
          }
        },
        (error) => {
          // Call the handleError function in case of any errors
          this.handleError(error);
        }
      );
  }

  // Error handling function
  private handleError(error: any): void {
    let errorMessage = 'An unexpected error occurred';

    // If the error is an HTTP error, try to provide a more meaningful message
    if (error?.status) {
      switch (error.status) {
        case 401:
          errorMessage = 'Unauthorized: Please log in again.';
          break;
        case 500:
          errorMessage = 'Server error: Please try again later.';
          break;
        case 0:
          errorMessage = 'Network error: Unable to reach the server.';
          break;
        default:
          errorMessage = `Error: ${
            error.message || 'An unexpected error occurred'
          }`;
      }
    } else if (typeof error === 'string') {
      errorMessage = error; // If it's a simple string, use it directly
    }

    // Display an error message using a snackbar
    this.snackBar.open(errorMessage, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });

    // Log out the user (remove token) and navigate to the sign-in page
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userinfo'); // Clear user info as well
    this.router.navigate(['/sign-in']);
  }

  signInWithGoogle(): void {
    this.logInWithGoogle = true; // Set the flag to true when Google login is clicked
    window.location.href =
      'http://localhost:8081/login/oauth2/authorization/google';
  }

  handleRedirect(): void {
    this.isLoading = true; // Show spinner
    // Subscribe to query parameters from the URL
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      const message = params['message']; // Get the message parameter
      // If there's a token, the login was successful
      if (token) {
        // Store the token in sessionStorage
        sessionStorage.setItem('token', token);
        // After showing the message or storing the token, clear the query parameters from the URL
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {}, // Clear query parameters (e.g., message, token)
          replaceUrl: true, // Replace the current URL in the browser history
        });
        this.snackBar.open('Request processed successfully', 'Close', {
          duration: 3000, // Snackbar duration
          verticalPosition: 'top', // Snackbar position
          horizontalPosition: 'right', // Snackbar position
        });
        const tokenNew = sessionStorage.getItem('token') || '';
        this.getUserInfo(tokenNew);
        // Navigate to the home page
        this.router.navigate(['/home']);
      } else {
        // If no token and a message exists, show the snackbar with the error message
        if (message) {
          this.snackBar.open(message, 'Close', {
            duration: 3000, // Snackbar duration
            verticalPosition: 'top', // Snackbar position
            horizontalPosition: 'right', // Snackbar position
          });
        }
        // After showing the message or storing the token, clear the query parameters from the URL
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {}, // Clear query parameters (e.g., message, token)
          replaceUrl: true, // Replace the current URL in the browser history
        });
      }
      this.isLoading = false; // Hide the loading spinner after processing
    });
  }
}
