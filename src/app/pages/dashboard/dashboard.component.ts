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
import { PersonalInfoComponent } from '../../components/personal-info/personal-info.component';
import { SkillAndExperienceComponent } from '../../components/skill-and-experience/skill-and-experience.component';
import { EducationAndCertificationsComponent } from '../../components/education-and-certifications/education-and-certifications.component';
import { AdditionalInfoComponent } from '../../components/additional-info/additional-info.component';
import { PerviewComponent } from '../../components/perview/perview.component';

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
    PersonalInfoComponent,
    SkillAndExperienceComponent,
    EducationAndCertificationsComponent,
    AdditionalInfoComponent,
    PerviewComponent,
  ],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container">
          <h2 class="text-center mat-h2 mb-1" style="color: #2a3d7c;  font-size: 1.6rem;">
            Create Your Portfolio
          </h2>
          <h5 class="text-center text-muted mb-4">
            Our commitment is to deliver exceptional portfolio to our users
          </h5>
          <mat-horizontal-stepper>
            <mat-step>
              <ng-template matStepLabel>
                <span>Personal Info</span>
              </ng-template>
              <app-personal-info></app-personal-info>
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
                <span>Education & Certifications</span>
              </ng-template>
              <app-education-and-certifications></app-education-and-certifications>
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
                <span>Skills & Experience</span>
              </ng-template>
              <app-skill-and-experience></app-skill-and-experience>
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
              <app-additional-info></app-additional-info>
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
              <app-perview></app-perview>
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
      </mat-card-content>
    </mat-card>
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
        font-size: 2.8em;
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
