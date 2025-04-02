import { AdditionalSubjectService } from './../../services/subject/additional-subject.service';
import { EducationAndCertificateService } from '../../services/subject/projects-and-certificate.service';
import { FolioService } from 'src/app/services/folio.service';
import { Component, inject } from '@angular/core';
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
import { EducationAndCertificationsComponent } from '../../components/projects-and-certifications/education-and-certifications.component';
import { AdditionalInfoComponent } from '../../components/additional-info/additional-info.component';
import { PerviewComponent } from '../../components/perview/perview.component';
import { FormSubmitService } from 'src/app/services/subject/personal-and-educational-subject.service';
import { SkillsAndExperienceSubjectService } from 'src/app/services/subject/skills-and-experience-subject.service';
import { FinishConfirmationDialogComponent } from 'src/app/components/finish-confirmation-dialog/finish-confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    MatDialogModule,
  ],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c;  font-size: 1.6rem;"
          >
            Create Your Portfolio
          </h2>
          <h5 class="text-center text-muted mb-4">
            Our commitment is to deliver exceptional portfolio to our users
          </h5>
          <mat-horizontal-stepper (selectionChange)="onStepperChange($event)">
            <mat-step>
              <ng-template matStepLabel>
                <span>Personal & Educations</span>
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
                <button
                  mat-raised-button
                  class="button-style"
                  matStepperNext
                  (click)="onNextClick('personal')"
                >
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
                <button
                  class="button-style"
                  mat-raised-button
                  matStepperNext
                  (click)="onNextClick('skill')"
                >
                  Next
                </button>
              </div>
            </mat-step>

            <mat-step>
              <ng-template matStepLabel>
                <span>Projects & Certifications</span>
              </ng-template>
              <app-education-and-certifications></app-education-and-certifications>
              <div class="button-container">
                <button mat-raised-button color="secondary" matStepperPrevious>
                  Back
                </button>
                <button
                  class="button-style"
                  mat-raised-button
                  matStepperNext
                  (click)="onNextClick('certification')"
                >
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
                <button
                  class="button-style"
                  mat-raised-button
                  matStepperNext
                  (click)="onNextClick('additionalInfo')"
                >
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
                <button
                  mat-raised-button
                  color="accent"
                  (click)="onNextClick('preview')"
                >
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

      .button-style {
        background: linear-gradient(135deg, #16a085, #732d91);
        color: white;
        padding: 12px 24px;
        font-size: 12px;
        text-transform: uppercase;
        border: none;
        transition: background-color 0.3s ease-in-out;
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
  private dialog = inject(MatDialog);

  // Trigger form submission when the Next button is clicked
  onNextClick(type: String) {
    if (type === 'personal') {
      this.formSubmitService.triggerFormSubmit();
    } else if (type === 'skill') {
      this.skillsAndExperienceSubjectService.triggerFormSubmit();
    } else if (type === 'certification') {
      this.educationAndCertificateService.triggerFormSubmit();
    } else if (type === 'additionalInfo') {
      this.additionalSubjectService.triggerFormSubmit();
    } else if (type === 'preview') {
      this.openConfirmationDialog();
    }
  }

  constructor(
    private fb: FormBuilder,
    private formSubmitService: FormSubmitService,
    private skillsAndExperienceSubjectService: SkillsAndExperienceSubjectService,
    private educationAndCertificateService: EducationAndCertificateService,
    private additionalSubjectService: AdditionalSubjectService
  ) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  // Called when stepper changes step
  onStepperChange(event: any) {
    if (event.selectedIndex === 0) {
      window.location.reload();
    }
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(FinishConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'finish') {
        console.log('Profile is completed!');
      } else {
        console.log('User canceled the profile completion.');
      }
    });
  }
}
