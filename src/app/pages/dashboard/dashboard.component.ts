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
            <mat-form-field appearance="outline">
              <mat-label>Full Name</mat-label>
              <input
                matInput
                name="input1"
                required
                ngModel
                #input1="ngModel"
                placeholder="Enter your full name"
              />
              <mat-icon matSuffix>person</mat-icon>
              <mat-error
                *ngIf="input1.invalid && (input1.dirty || input1.touched)"
              >
                Input is required
              </mat-error>
              <mat-hint>Enter your full name.</mat-hint>
            </mat-form-field>
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
              <button mat-button matStepperPrevious>Back</button>
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
              <button mat-button matStepperPrevious>Back</button>
              <button mat-raised-button color="primary" matStepperNext>
                Preview
              </button>
            </div>
          </form>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Preview</span>
          </ng-template>
          <p>Preview your inputs:</p>
          <p *ngIf="input1?.value">Full Name: {{ input1.value }}</p>
          <p *ngIf="input2?.value">Email: {{ input2.value }}</p>
          <p *ngIf="input3?.value">Portfolio Link: {{ input3.value }}</p>
          <p *ngIf="input4?.value">Experience: {{ input4.value }}</p>
          <div class="button-container">
            <button mat-button matStepperPrevious>Back</button>
            <button mat-raised-button color="accent" (click)="finish()">
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
          <p *ngIf="input1?.value">Full Name: {{ input1.value }}</p>
          <p *ngIf="input2?.value">Email: {{ input2.value }}</p>
          <p *ngIf="input3?.value">Portfolio Link: {{ input3.value }}</p>
          <p *ngIf="input4?.value">Experience: {{ input4.value }}</p>
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
