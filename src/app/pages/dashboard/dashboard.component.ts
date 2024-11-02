import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

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

          <div class="button-container">
            <button
              mat-raised-button
              disabled
              color="secondary"
              matStepperPrevious
            >
              Back
            </button>
            <button mat-raised-button color="primary" matStepperNext>
              Next
            </button>
          </div>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Skills & Experience</span>
          </ng-template>
          <div class="button-container">
            <button mat-raised-button color="secondary" matStepperPrevious>
              Back
            </button>
            <button mat-raised-button color="primary" matStepperNext>
              Next
            </button>
          </div>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Education & Certifications</span>
          </ng-template>

          <div class="button-container">
            <button mat-raised-button color="secondary" matStepperPrevious>
              Back
            </button>
            <button mat-raised-button color="primary" matStepperNext>
              Next
            </button>
          </div>
        </mat-step>

        <mat-step>
          <ng-template matStepLabel>
            <span>Additional Info</span>
          </ng-template>
          <div class="button-container">
            <button mat-raised-button color="secondary" matStepperPrevious>
              Back
            </button>
            <button mat-raised-button color="primary" matStepperNext>
              Next
            </button>
          </div>
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
  skills: FormArray;
  experiences: FormArray;
  skillOptions: string[] = [
    'JavaScript',
    'Angular',
    'React',
    'Node.js',
    'Python',
  ];

  constructor(private fb: FormBuilder) {
    this.skills = this.fb.array([this.createSkill()]);
    this.experiences = this.fb.array([this.createExperience()]);
  }

  ngOnInit() {
    // Initialization logic if needed
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required],
    });
  }

  createExperience(): FormGroup {
    return this.fb.group({
      experience: ['', Validators.required],
    });
  }

  addSkill(): void {
    this.skills.push(this.createSkill());
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  addExperience(): void {
    this.experiences.push(this.createExperience());
  }

  removeExperience(index: number): void {
    this.experiences.removeAt(index);
  }

  isSkillInvalid(index: number): boolean {
    return (
      this.skills.at(index).invalid &&
      (this.skills.at(index).dirty || this.skills.at(index).touched)
    );
  }

  isExperienceInvalid(index: number): boolean {
    return (
      this.experiences.at(index).invalid &&
      (this.experiences.at(index).dirty || this.experiences.at(index).touched)
    );
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
