import { CommonService } from 'src/app/services/common.service';
import { AdditionalSubjectService } from './../../services/subject/additional-subject.service';
import { FolioService } from 'src/app/services/folio.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
  ],
  template: `
    <div class="container-lg py-4">
      <div class="card border-0 mx-auto">
        <div class="card-body p-4">
          <h4 class="card-title mb-3 text-center">
            <b>ADDITIONAL INFORMATION</b>
          </h4>
          <hr />

          <!-- Form -->
          <form [formGroup]="additionalInfoForm">
            <!-- Select Template Section -->
            <div class="mb-3">
              <h5>Select Template</h5>
              <div class="row">
                <div
                  class="col-6 col-md-4 mb-3"
                  *ngFor="let template of templates"
                >
                  <div
                    class="template-card border shadow-sm p-3 position-relative"
                    (click)="selectTemplate(template)"
                    [class.selected]="
                      additionalInfoForm.get('template')?.value ===
                      template.name
                    "
                    style="cursor: pointer; transition: transform 0.2s ease-in-out; border-radius: 8px;"
                  >
                    <div
                      class="image-container"
                      style="height: 160px; overflow: hidden; border-radius: 8px 8px 0 0;"
                    >
                      <img
                        [src]="template.image"
                        class="img-fluid"
                        alt="{{ template.name }}"
                        style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px 8px 0 0;"
                      />
                    </div>
                    <div class="text-center mt-2">
                      <h6 class="mb-0">{{ template.name }}</h6>
                    </div>
                    <div
                      *ngIf="
                        additionalInfoForm.get('template')?.value ===
                        template.name
                      "
                      class="check-icon position-absolute top-0 end-0 p-2"
                      [class.border-solid-red]="
                        additionalInfoForm.get('template')?.value ===
                        template.name
                      "
                    >
                      <mat-icon class="text-success">check_circle</mat-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Portfolio URL Section -->
            <mat-card class="mb-3">
              <mat-card-header>
                <mat-card-title>Enter Portfolio URL</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <div class="input-group">
                  <span class="input-group-text text-muted">{{ baseUrl }}</span>
                  <input
                    matInput
                    type="text"
                    formControlName="folioUrl"
                    class="form-control"
                    placeholder="Enter your custom URL"
                    (input)="updateFinalUrl()"
                  />
                </div>
                <div class="d-flex justify-content-between mt-2">
                  <button
                    mat-raised-button
                    color="accent"
                    (click)="generateRandomUrl()"
                    matTooltip="Generate Random URL"
                  >
                    <mat-icon>shuffle</mat-icon>
                  </button>

                  <button
                    mat-raised-button
                    color="primary"
                    (click)="checkPortfolioUrl()"
                    matTooltip="Check URL Availability"
                  >
                    <mat-icon>check_circle</mat-icon>
                  </button>
                </div>
                <div class="form-text text-muted mt-2">
                  Your portfolio will be available at:
                </div>
                <div
                  class="alert alert-light border mt-2 p-2 d-flex justify-content-between align-items-center"
                >
                  <b>{{ finalUrl }}</b>
                  <mat-icon
                    matTooltip="Copy URL"
                    class="cursor-pointer"
                    (click)="copyToClipboard()"
                    style="font-size: 1.5rem; cursor: pointer;"
                    >content_copy</mat-icon
                  >
                </div>
              </mat-card-content>
            </mat-card>

            <!-- Upload Image Section -->
            <mat-card class="mb-3">
              <mat-card-header>
                <mat-card-title>Upload Image for Portfolio</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <button
                  mat-raised-button
                  color="accent"
                  (click)="fileInputImage.click()"
                >
                  Select Image
                </button>
                <input
                  #fileInputImage
                  type="file"
                  (change)="onFileSelect($event, 'image')"
                  class="d-none"
                />
                <small *ngIf="selectedImageName" class="text-muted"
                  >Selected: {{ selectedImageName }}</small
                >
              </mat-card-content>
            </mat-card>

            <!-- Slider Option Section -->
            <mat-card class="mb-3">
              <mat-card-header>
                <mat-card-title>Enable Slider</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <mat-checkbox formControlName="slider" [checked]="true">
                  Enable Slider (default is ON)
                </mat-checkbox>
              </mat-card-content>
            </mat-card>

            <!-- Upload Resume Section -->
            <mat-card class="mb-3">
              <mat-card-header>
                <mat-card-title>Upload Resume</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <button
                  mat-raised-button
                  color="accent"
                  (click)="fileInputResume.click()"
                >
                  Select Resume
                </button>
                <input
                  #fileInputResume
                  type="file"
                  (change)="onFileSelect($event, 'resume')"
                  class="d-none"
                />
                <small *ngIf="selectedResumeName" class="text-muted"
                  >Selected: {{ selectedResumeName }}</small
                >
              </mat-card-content>
            </mat-card>

            <!-- Live Profile Toggle Section -->
            <mat-card class="mb-3">
              <mat-card-header>
                <mat-card-title>Live Your Profile</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <mat-checkbox formControlName="liveProfile">
                  Live Your Profile
                </mat-checkbox>
              </mat-card-content>
            </mat-card>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .border-solid-red {
        border: 4px solid red; /* Solid red border */
      }

      .container-lg {
        max-width: 100%;
      }
      .template-card {
        cursor: pointer;
        border-radius: 8px;
        transition: transform 0.2s ease-in-out;
      }
      .template-card:hover {
        transform: scale(1.03);
      }
      .template-card.selected {
        border: 2px solid #007bff;
      }
      .alert {
        background-color: #f8f9fa;
      }
      .mat-card {
        margin-bottom: 1rem;
      }
      .selected-template {
        border: 4px solid red; /* Apply a thick red border */
        padding: 5px; /* Optional: Add some padding to avoid the border touching the content */
        border-radius: 5px; /* Optional: Round the corners */
      }
    `,
  ],
})
export class AdditionalInfoComponent implements OnInit {
  // Define the form group that will hold the form controls and their values
  additionalInfoForm: FormGroup;
  selectedImageName: string | null = null;
  selectedResumeName: string | null = null;
  urlMessage: string | null = null;
  finalUrl: string = '';
  baseUrl = 'https://foliodesigners.com/';
  userDetails: any; // Store the user data from API
  private submitFormSubscription: Subscription | undefined;

  templates = [
    {
      name: 'Template 1',
      image:
        'https://images.unsplash.com/photo-1541598599844-19a0319b8846?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Template 2',
      image:
        'https://plus.unsplash.com/premium_photo-1683141351293-5c53bcdfc63b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Template 3',
      image:
        'https://plus.unsplash.com/premium_photo-1681566925305-e7827f95c717?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private folioService: FolioService,
    private additionalSubjectService: AdditionalSubjectService,
    private snackBar: MatSnackBar,
    private commonService: CommonService
  ) {
    this.additionalInfoForm = this.fb.group({
      id: [''],
      template: [''], // Matches payload key
      slider: [true],
      resumeUrl: [null],
      imageUrl: [null],
      liveProfile: [false],
      folioUrl: [''],
    });

    this.updateFinalUrl();
  }

  selectTemplate(template: any) {
    this.additionalInfoForm.patchValue({ template: template.name });
  }

  onFileSelect(event: any, type: 'image' | 'resume') {
    const file = event.target.files[0];
    if (file) {
      this.additionalInfoForm.patchValue({ [type]: file });
      if (type === 'image') {
        this.selectedImageName = file.name;
      } else if (type === 'resume') {
        this.selectedResumeName = file.name;
      }
    }
  }

  updateFinalUrl() {
    const slug = this.additionalInfoForm.get('folioUrl')?.value || '';
    this.finalUrl = this.baseUrl + slug;
  }

  generateRandomUrl() {
    const randomSlug = Math.random().toString(36).substring(2, 8);
    this.additionalInfoForm.patchValue({ folioUrl: randomSlug });
    this.finalUrl = `${this.baseUrl}${randomSlug}`;
  }

  checkPortfolioUrl() {
    const slug = this.additionalInfoForm.get('folioUrl')?.value;
    if (slug && slug.trim() !== '') {
      this.urlMessage = `This URL (${this.baseUrl}${slug}) is available! ✅`;
    } else {
      this.urlMessage = 'Please enter a valid URL slug.';
    }
  }

  copyToClipboard() {
    const finalUrl =
      this.baseUrl + this.additionalInfoForm.get('folioUrl')?.value;
    navigator.clipboard.writeText(finalUrl).then(
      () => {
        alert('URL copied to clipboard!');
      },
      (err) => {
        console.error('Error copying URL: ', err);
      }
    );
  }

  ngOnInit(): void {
    // Fetch user data from API
    this.folioService.getPersonalDetails().subscribe(
      (response: any) => {
        this.userDetails = response.response[0];
        this.populateForm();
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );

    // Subscribe to form submission trigger
    this.submitFormSubscription =
      this.additionalSubjectService.submitForm$.subscribe(() => {
        this.submitForm();
      });
  }

  populateForm(): void {
    if (this.userDetails && this.userDetails.additionalDetails) {
      const additionalDetails = this.userDetails.additionalDetails;

      // Patch form values from additionalDetails
      this.additionalInfoForm.patchValue({
        folioUrl: additionalDetails.folioUrl || '', // Make sure to use empty string if null or undefined
        liveProfile: additionalDetails.liveProfile,
        template: additionalDetails.templateName || '', // Match the field name with your API response
        id: additionalDetails.id || null,
      });

      // Set the finalUrl based on the folioUrl
      this.finalUrl = additionalDetails.folioUrl || '';

      // Bind selected image and resume if they exist
      if (additionalDetails.imageUrl) {
        this.selectedImageName = additionalDetails.imageUrl;
      }

      if (additionalDetails.resumeUrl) {
        this.selectedResumeName = additionalDetails.resumeUrl;
      }

      // Handle template selection
      if (additionalDetails.templateName) {
        const selectedTemplate = this.templates.find(
          (template) => template.name === additionalDetails.templateName
        );
        if (selectedTemplate) {
          this.selectTemplate(selectedTemplate);
        }
      }
    }
  }

  submitForm(): void {
    // Add folioUrl (finalUrl) inside additionalDetails
    const payload: any = {
      additionalDetails: {
        id: this.additionalInfoForm.get('id')?.value || null,
        templateName: this.additionalInfoForm.get('template')?.value || '', // Fix key name
        enableSlider: this.additionalInfoForm.get('slider')?.value || false,
        resumeUrl: this.additionalInfoForm.get('resumeUrl')?.value || '',
        imageUrl: this.additionalInfoForm.get('imageUrl')?.value || '',
        liveProfile: this.additionalInfoForm.get('liveProfile')?.value || false,
        folioUrl: this.finalUrl,
      },
      userId: this.commonService.getLoggedInUserId(),
    };

    // If the form has no `id`, set it to null
    if (!payload.additionalDetails.id) {
      payload.additionalDetails.id = null;
    }

    // Save the form data using the folioService
    this.folioService.saveAdditionalDetails(payload).subscribe(
      (response) => {
        console.log('Additional details saved successfully:', response);
        this.snackBar.open('Profile updated successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
      },
      (error) => {
        console.error('Error saving additional details:', error);
        this.snackBar.open('Error saving profile!', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      }
    );
  }
}
