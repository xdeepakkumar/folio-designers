import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FolioService } from 'src/app/services/folio.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-perview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule], // Ensure MatCardModule and MatButtonModule are imported
  template: `
    <div *ngIf="loading">Loading...</div>

    <div *ngIf="!loading && user" class="container-lg py-5">
      <!-- Personal Info Card -->
      <mat-card class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Personal Info</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p>
            <strong>Address:</strong> {{ user.address }}, {{ user.city }},
            {{ user.state }} - {{ user.zip }}
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a [href]="user.linkedIn" target="_blank">{{ user.linkedIn }}</a>
          </p>
          <p>
            <strong>Facebook:</strong>
            <a [href]="user.facebook" target="_blank">{{ user.facebook }}</a>
          </p>
        </mat-card-content>
      </mat-card>

      <!-- Education Card -->
      <mat-card *ngIf="user.educationDetailsList.length > 0" class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Education</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div
            *ngFor="let education of user.educationDetailsList; let i = index"
          >
            <p>
              <strong>Degree {{ i + 1 }}:</strong> {{ education.degree }}
            </p>
            <p><strong>Institution:</strong> {{ education.institution }}</p>
            <p>
              <strong>Graduation Year:</strong> {{ education.graduationYear }}
            </p>
            <p><strong>Grade:</strong> {{ education.grade }}</p>
            <mat-divider
              *ngIf="i < user.educationDetailsList.length - 1"
            ></mat-divider>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Skills Card -->
      <mat-card *ngIf="user.skillsList.length > 0" class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Skills</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div *ngFor="let skill of user.skillsList; let i = index">
            <p>
              <strong>Skill {{ i + 1 }}:</strong> {{ skill.name }}
            </p>
            <p><strong>Description:</strong> {{ skill.description }}</p>
            <p>
              <strong>Experience:</strong> {{ skill.experienceInYear }} years
            </p>
            <p>
              <strong>Proficiency Level:</strong> {{ skill.proficiencyLevel }}
            </p>
            <mat-divider *ngIf="i < user.skillsList.length - 1"></mat-divider>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Experience Card -->
      <mat-card *ngIf="user.experienceList.length > 0" class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Experience</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div *ngFor="let experience of user.experienceList; let i = index">
            <p><strong>Role:</strong> {{ experience.role }}</p>
            <p><strong>Organization:</strong> {{ experience.organization }}</p>
            <p>
              <strong>Years of Experience:</strong>
              {{ experience.yearOfExperience }} years
            </p>
            <p><strong>Description:</strong> {{ experience.description }}</p>
            <mat-divider
              *ngIf="i < user.experienceList.length - 1"
            ></mat-divider>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Projects Card -->
      <mat-card *ngIf="user.projectsList.length > 0" class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Projects</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div *ngFor="let project of user.projectsList; let i = index">
            <p>
              <strong>Project {{ i + 1 }} Name:</strong> {{ project.name }}
            </p>
            <p><strong>Description:</strong> {{ project.description }}</p>
            <p>
              <strong>Technology Used:</strong> {{ project.technologyUsed }}
            </p>
            <p><strong>Role:</strong> {{ project.role }}</p>
            <p>
              <strong>GitHub Link:</strong>
              <a [href]="project.githubLink" target="_blank">{{
                project.githubLink
              }}</a>
            </p>
            <p>
              <strong>Live URL:</strong>
              <a [href]="project.liveUrl" target="_blank">{{
                project.liveUrl
              }}</a>
            </p>
            <mat-divider
              *ngIf="i < user.projectsList.length - 1"
              class="p-2"
            ></mat-divider>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Certifications Card -->
      <mat-card *ngIf="user.certificationsList.length > 0" class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary">Certifications</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div
            *ngFor="let certification of user.certificationsList; let i = index"
          >
            <p>
              <strong>Certification {{ i + 1 }}:</strong>
              {{ certification.name }}
            </p>
            <p>
              <strong>Issuing Organization:</strong>
              {{ certification.issuingOrganization }}
            </p>
            <p><strong>Date Issued:</strong> {{ certification.dateIssued }}</p>
            <p>
              <strong>Expiration Date:</strong>
              {{ certification.dateOfExpiration || 'N/A' }}
            </p>
            <p><strong>Description:</strong> {{ certification.description }}</p>
            <mat-divider
              *ngIf="i < user.certificationsList.length - 1"
            ></mat-divider>
          </div>
        </mat-card-content>
      </mat-card>

      <!-- Additional Info Card -->
      <mat-card class="mb-4">
        <mat-card-header>
          <mat-card-title class="text-secondary"
            >Additional Information</mat-card-title
          >
        </mat-card-header>
        <mat-card-content>
          <p>
            <strong>Template:</strong> {{ user.additionalDetails.templateName }}
          </p>
          <p>
            <strong>Live Profile:</strong>
            {{ user.additionalDetails.liveProfile ? 'Yes' : 'No' }}
          </p>
          <p>
            <strong>Slider Enabled:</strong>
            {{ user.additionalDetails.enableSlider ? 'Yes' : 'No' }}
          </p>
          <p>
            <strong>Folio URL:</strong>
            <a [href]="user.additionalDetails.folioUrl" target="_blank">{{
              user.additionalDetails.folioUrl
            }}</a>
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .container-lg {
        max-width: 100%;
      }

      mat-card {
        border-radius: 0; /* No border radius */
      }

      .mat-card-title {
        font-size: 1.25rem;
        font-weight: 600;
      }

      a {
        text-decoration: none;
        color: #007bff;
      }

      a:hover {
        text-decoration: underline;
      }

      mat-card-content {
        padding: 1.25rem; /* Adds some padding to the card */
      }
    `,
  ],
})
export class PerviewComponent implements OnInit, OnDestroy {
  user: any = null;
  loading = true; // Flag for loading state
  private subscription: Subscription = new Subscription();

  constructor(private profileService: FolioService) {}

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    this.subscription.add(
      this.profileService.getPersonalDetails().subscribe(
        (response: any) => {
          this.user = response.response[0]; // Assuming the data is inside response.response[0]
          this.loading = false; // Set loading to false when data is fetched
        },
        (error) => {
          console.error('Error fetching profile data:', error);
          this.loading = false; // Set loading to false even if there's an error
        }
      )
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
