import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { FolioService } from 'src/app/services/folio.service';

@Component({
  selector: 'app-perview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading">Loading...</div>

    <div *ngIf="!loading && user" class="container-lg py-5">
      <h2 class="text-center mb-4">Profile Preview</h2>

      <!-- Personal Info Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Personal Info</h5>
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
        </div>
      </div>

      <!-- Education Card -->
      <div
        *ngIf="user.educationDetailsList.length > 0"
        class="card mb-4 shadow-lg border-0"
        style="border-radius: 12px;"
      >
        <div class="card-body">
          <h5 class="card-title text-secondary">Education</h5>
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
            <hr *ngIf="i < user.educationDetailsList.length - 1" />
          </div>
        </div>
      </div>

      <!-- Skills Card -->
      <div
        *ngIf="user.skillsList.length > 0"
        class="card mb-4 shadow-lg border-0"
        style="border-radius: 12px;"
      >
        <div class="card-body">
          <h5 class="card-title text-secondary">Skills</h5>
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
            <hr *ngIf="i < user.skillsList.length - 1" />
          </div>
        </div>
      </div>

      <!-- Experience Card -->
      <div
        *ngIf="user.experienceList.length > 0"
        class="card mb-4 shadow-lg border-0"
        style="border-radius: 12px;"
      >
        <div class="card-body">
          <h5 class="card-title text-secondary">Experience</h5>
          <div *ngFor="let experience of user.experienceList; let i = index">
            <p><strong>Role:</strong> {{ experience.role }}</p>
            <p><strong>Organization:</strong> {{ experience.organization }}</p>
            <p>
              <strong>Years of Experience:</strong>
              {{ experience.yearOfExperience }} years
            </p>
            <p><strong>Description:</strong> {{ experience.description }}</p>
            <hr *ngIf="i < user.experienceList.length - 1" />
          </div>
        </div>
      </div>

      <!-- Projects Card -->
      <div
        *ngIf="user.projectsList.length > 0"
        class="card mb-4 shadow-lg border-0"
        style="border-radius: 12px;"
      >
        <div class="card-body">
          <h5 class="card-title text-secondary">Projects</h5>
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
            <hr *ngIf="i < user.projectsList.length - 1" />
          </div>
        </div>
      </div>

      <!-- Certifications Card -->
      <div
        *ngIf="user.certificationsList.length > 0"
        class="card mb-4 shadow-lg border-0"
        style="border-radius: 12px;"
      >
        <div class="card-body">
          <h5 class="card-title text-secondary">Certifications</h5>
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
            <hr *ngIf="i < user.certificationsList.length - 1" />
          </div>
        </div>
      </div>

      <!-- Additional Info Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Additional Information</h5>
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
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container-lg {
        max-width: 100%;
      }
      .card {
        border-radius: 12px;
      }
      .card-title {
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
