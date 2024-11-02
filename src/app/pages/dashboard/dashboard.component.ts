import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  template: `
    <div class="container">
      <h2>Create Portfolio</h2>
      <mat-horizontal-stepper>
        <mat-step>
          <ng-template matStepLabel>
            <span>Personal Info</span>
          </ng-template>
          <form #form1="ngForm" (ngSubmit)="onSubmit(form1)">
            <mat-card class="personal-info-card">
              <mat-card-header>
                <mat-card-title>Personal Information</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="name-inputs">
                  <mat-form-field appearance="fill" class="first-name">
                    <mat-label>First Name</mat-label>
                    <input
                      matInput
                      name="firstName"
                      required
                      ngModel
                      #firstName="ngModel"
                      placeholder="First Name"
                    />
                    <mat-icon matSuffix>person</mat-icon>
                    <mat-error
                      *ngIf="
                        firstName.invalid &&
                        (firstName.dirty || firstName.touched)
                      "
                    >
                      Required
                    </mat-error>
                  </mat-form-field>

                  <mat-form-field appearance="fill" class="last-name">
                    <mat-label>Last Name</mat-label>
                    <input
                      matInput
                      name="lastName"
                      required
                      ngModel
                      #lastName="ngModel"
                      placeholder="Last Name"
                    />
                    <mat-icon matSuffix>person</mat-icon>
                    <mat-error
                      *ngIf="
                        lastName.invalid && (lastName.dirty || lastName.touched)
                      "
                    >
                      Required
                    </mat-error>
                  </mat-form-field>
                </div>

                <mat-form-field appearance="fill">
                  <mat-label>Mobile Number</mat-label>
                  <input
                    matInput
                    name="mobileNumber"
                    required
                    ngModel
                    #mobileNumber="ngModel"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                  <mat-icon matSuffix>phone</mat-icon>
                  <mat-error
                    *ngIf="
                      mobileNumber.invalid &&
                      (mobileNumber.dirty || mobileNumber.touched)
                    "
                  >
                    Required
                  </mat-error>
                </mat-form-field>

                <mat-form-field appearance="fill">
                  <mat-label>Email</mat-label>
                  <input
                    matInput
                    name="email"
                    required
                    ngModel
                    #email="ngModel"
                    placeholder="Email"
                    type="email"
                  />
                  <mat-icon matSuffix>email</mat-icon>
                  <mat-error
                    *ngIf="email.invalid && (email.dirty || email.touched)"
                  >
                    Required
                  </mat-error>
                </mat-form-field>

                <div class="social-media-inputs">
                  <mat-form-field appearance="fill">
                    <mat-label>LinkedIn</mat-label>
                    <input
                      matInput
                      name="linkedin"
                      ngModel
                      placeholder="LinkedIn URL"
                    />
                    <mat-icon matSuffix>link</mat-icon>
                  </mat-form-field>

                  <mat-form-field appearance="fill">
                    <mat-label>Twitter</mat-label>
                    <input
                      matInput
                      name="twitter"
                      ngModel
                      placeholder="Twitter URL"
                    />
                    <mat-icon matSuffix>link</mat-icon>
                  </mat-form-field>
                </div>
              </mat-card-content>
            </mat-card>

            <div class="button-container">
              <button mat-raised-button color="primary" matStepperNext>
                Next
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Skills & Experience</span>
          </ng-template>
          <form #form2="ngForm" (ngSubmit)="onSubmit(form2)">
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input
                matInput
                name="input2"
                required
                ngModel
                #input2="ngModel"
                placeholder="Enter your email"
                type="email"
              />
              <mat-icon matSuffix>email</mat-icon>
              <mat-error
                *ngIf="input2.invalid && (input2.dirty || input2.touched)"
              >
                Input is required
              </mat-error>
              <mat-hint>Enter a valid email address.</mat-hint>
            </mat-form-field>
            <div class="button-container">
              <button mat-raised-button color="secondary" matStepperPrevious>
                Back
              </button>
              <button mat-raised-button color="primary" matStepperNext>
                Next
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Education & Certifications</span>
          </ng-template>
          <form #form3="ngForm" (ngSubmit)="onSubmit(form3)">
            <mat-form-field appearance="outline">
              <mat-label>Portfolio Link</mat-label>
              <input
                matInput
                name="input3"
                required
                ngModel
                #input3="ngModel"
                placeholder="Enter your portfolio URL"
              />
              <mat-icon matSuffix>link</mat-icon>
              <mat-error
                *ngIf="input3.invalid && (input3.dirty || input3.touched)"
              >
                Input is required
              </mat-error>
              <mat-hint>Enter the link to your portfolio.</mat-hint>
            </mat-form-field>
            <div class="button-container">
              <button mat-raised-button color="secondary" matStepperPrevious>
                Back
              </button>
              <button mat-raised-button color="primary" matStepperNext>
                Next
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Additional Info</span>
          </ng-template>
          <form #form4="ngForm" (ngSubmit)="onSubmit(form4)">
            <mat-form-field appearance="outline">
              <mat-label>Experience</mat-label>
              <textarea
                matInput
                name="input4"
                required
                ngModel
                #input4="ngModel"
                placeholder="Describe your work experience"
                rows="3"
              ></textarea>
              <mat-icon matSuffix>work</mat-icon>
              <mat-error
                *ngIf="input4.invalid && (input4.dirty || input4.touched)"
              >
                Input is required
              </mat-error>
              <mat-hint>Share your work experience here.</mat-hint>
            </mat-form-field>
            <div class="button-container">
              <button mat-raised-button color="secondary" matStepperPrevious>
                Back
              </button>
              <button mat-raised-button color="primary" matStepperNext>
                Next
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Preview</span>
          </ng-template>
          <p>Preview your inputs:</p>
          <div class="button-container">
            <button mat-raised-button color="secondary" matStepperPrevious>
              Back
            </button>
            <button mat-raised-button color="accent" matStepperNext>
              Finish
            </button>
          </div>
        </mat-step>
      </mat-horizontal-stepper>

      <!-- Full-Width Card to Display Data -->
      <mat-card class="full-width-card">
        <mat-card-header>
          <mat-card-title>Data Display</mat-card-title>
          <mat-card-subtitle>Summary of Inputs</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Hello</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 16px;
        margin-bottom: 10%;
      }

      h2 {
        text-align: center;
        font-size: 1.8em;
      }

      mat-form-field {
        margin-top: 8px;
        width: 100%;
      }

      mat-icon {
        margin-right: 8px;
      }

      .button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }

      .full-width-card {
        width: 100%;
        margin-top: 16px;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        h2 {
          font-size: 1.5em;
        }

        .container {
          padding: 12px;
        }

        mat-step {
          margin: 8px 0;
        }

        button {
          min-width: 70px;
          height: 32px;
          font-size: 0.85em;
        }

        .full-width-card {
          margin-top: 12px;
        }
      }

      @media (max-width: 480px) {
        h2 {
          font-size: 1.2em;
        }

        .container {
          padding: 8px;
        }

        button {
          font-size: 0.75em;
        }

        mat-card-header {
          text-align: center;
        }
      }

      /* personal details **/
      .personal-info-card {
        margin: 16px auto; /* Center the card with margin auto */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        max-width: 80%; /* Limit width to 80% of the screen */
      }

      .name-inputs {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px; /* Space below the name inputs */
      }

      .name-inputs mat-form-field {
        flex: 1;
        margin-right: 8px; /* Space between first and last name fields */
      }

      .name-inputs mat-form-field:last-child {
        margin-right: 0; /* No right margin for the last field */
      }

      .social-media-inputs {
        display: flex;
        justify-content: space-between;
        margin-top: 16px; /* Space above social media inputs */
      }

      .social-media-inputs mat-form-field {
        flex: 1;
        margin-right: 8px; /* Space between LinkedIn and Twitter fields */
      }

      .social-media-inputs mat-form-field:last-child {
        margin-right: 0; /* No right margin for the last field */
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .name-inputs,
        .social-media-inputs {
          flex-direction: column; /* Stack on smaller screens */
        }

        .name-inputs mat-form-field,
        .social-media-inputs mat-form-field {
          margin-right: 0; /* Remove right margin in column layout */
          margin-bottom: 16px; /* Space between stacked fields */
        }
      }

      mat-form-field {
        width: 100%; /* Full width for inputs */
      }

      mat-icon {
        margin-right: 8px; /* Space between icon and input */
      }

      /* Additional styling for smaller appearance */
      mat-form-field {
        min-width: 150px; /* Minimum width for inputs */
      }

      button {
        min-width: 70px; /* Consistent button width */
        height: 36px; /* Button height */
        font-size: 0.9em; /* Font size for buttons */
      }

      mat-form-field {
        width: 100%; /* Full width for inputs */
      }

      mat-icon {
        margin-right: 8px; /* Space between icon and input */
      }
      /* Responsive adjustments */
      @media (max-width: 768px) {
        .name-inputs {
          flex-direction: column; /* Stack on smaller screens */
        }

        .name-inputs mat-form-field {
          margin-right: 0; /* Remove right margin in column layout */
          margin-bottom: 16px; /* Add space between stacked fields */
        }
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .name-inputs {
          flex-direction: column; /* Stack on smaller screens */
        }

        .name-inputs mat-form-field {
          margin-right: 0; /* Remove right margin in column layout */
          margin-bottom: 16px; /* Add space between stacked fields */
        }
      }
    `,
  ],
})
export class DashboardComponent {
  finish() {
    console.log('Finished!');
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
