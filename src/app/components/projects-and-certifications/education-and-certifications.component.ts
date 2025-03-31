import { EducationAndCertificateService } from '../../services/subject/projects-and-certificate.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FolioService } from 'src/app/services/folio.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-education-and-certifications', // Keeping the same selector name
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-5">
      <form [formGroup]="educationAndCertificationsForm">
        <div class="row">
          <!-- Project Section -->
          <div class="col-lg-6 mb-4">
            <div class="card mx-auto border-0" style="border-radius: 4px;">
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center">
                  <b>ADD PROJECT DETAILS</b>
                </h4>
                <hr />

                <div formArrayName="projects">
                  <div
                    *ngFor="let project of projects.controls; let i = index"
                    [formGroupName]="i"
                    class="card mb-3 border-0 shadow-sm"
                  >
                    <div class="card-body p-4">
                      <h6 class="card-subtitle mb-3 text-secondary">
                        Project {{ i + 1 }}
                      </h6>
                      <div class="row g-3">
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Project Name</label
                          >
                          <input
                            type="text"
                            formControlName="name"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Personal Portfolio, E-Commerce App"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Project Description</label
                          >
                          <textarea
                            formControlName="description"
                            class="form-control border-secondary-subtle"
                            placeholder="Describe the project"
                            rows="4"
                            required
                          ></textarea>
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold"
                            >Technologies Used</label
                          >
                          <input
                            type="text"
                            formControlName="technologyUsed"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Angular, Node.js, MongoDB"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold">Role</label>
                          <input
                            type="text"
                            formControlName="role"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Frontend Developer"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >GitHub Repository</label
                          >
                          <input
                            type="url"
                            formControlName="githubLink"
                            class="form-control border-secondary-subtle"
                            placeholder="https://github.com/username/project-name"
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold">Live URL</label>
                          <input
                            type="url"
                            formControlName="liveUrl"
                            class="form-control border-secondary-subtle"
                            placeholder="https://projectname.com"
                          />
                        </div>
                        <div class="col-12 text-end">
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm mt-3"
                            (click)="removeProject(i)"
                          >
                            Remove Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm mt-4"
                    (click)="addProject()"
                  >
                    Add Another Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications Section -->
          <div class="col-lg-6 mb-4">
            <div class="card mx-auto border-0" style="border-radius: 4px;">
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center">
                  <b>ADD YOUR CERTIFICATION DETAILS</b>
                </h4>
                <hr />

                <div formArrayName="certifications">
                  <div
                    *ngFor="
                      let certification of certifications.controls;
                      let i = index
                    "
                    [formGroupName]="i"
                    class="card mb-3 border-0 shadow-sm"
                  >
                    <div class="card-body p-4">
                      <h6 class="card-subtitle mb-3 text-secondary">
                        Certification {{ i + 1 }}
                      </h6>
                      <div class="row g-3">
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Certification Name</label
                          >
                          <input
                            type="text"
                            formControlName="name"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., AWS Certified Solutions Architect"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Issuing Organization</label
                          >
                          <input
                            type="text"
                            formControlName="issuingOrganization"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Amazon, Google"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold"
                            >Date Issued</label
                          >
                          <input
                            type="date"
                            formControlName="dateIssued"
                            class="form-control border-secondary-subtle"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold"
                            >Expiration Date</label
                          >
                          <input
                            type="date"
                            formControlName="dateOfExpiration"
                            class="form-control border-secondary-subtle"
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Certification Description</label
                          >
                          <textarea
                            formControlName="description"
                            class="form-control border-secondary-subtle"
                            placeholder="Describe the certification details"
                            rows="4"
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Certification Image</label
                          >
                          <input
                            type="file"
                            formControlName="image"
                            class="form-control border-secondary-subtle"
                            accept="image/*"
                          />
                        </div>
                        <div class="col-12 text-end">
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm mt-3"
                            (click)="removeCertification(i)"
                          >
                            Remove Certification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-sm mt-4"
                    (click)="addCertification()"
                  >
                    Add Another Certification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .container-lg {
        max-width: 100%;
      }
      .card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }
      .card-subtitle {
        font-size: 1rem;
        font-weight: 500;
      }
      .form-control {
        box-sizing: border-box;
      }
      @media (max-width: 768px) {
        .row {
          flex-direction: column;
        }
      }
    `,
  ],
})
export class EducationAndCertificationsComponent implements OnInit, OnDestroy {
  educationAndCertificationsForm: FormGroup;
  private submitFormSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private folioService: FolioService,
    private educationAndCertificateService: EducationAndCertificateService,
    private snackBar: MatSnackBar
  ) {
    this.educationAndCertificationsForm = this.fb.group({
      projects: this.fb.array([]),
      certifications: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.fetchAndBindData();

    // Subscribe to form submission trigger
    this.submitFormSubscription =
      this.educationAndCertificateService.submitForm$.subscribe(() => {
        this.onSubmit();
      });
  }

  // Getter for projects
  get projects(): FormArray {
    return this.educationAndCertificationsForm.get('projects') as FormArray;
  }

  // Getter for certifications
  get certifications(): FormArray {
    return this.educationAndCertificationsForm.get(
      'certifications'
    ) as FormArray;
  }

  // Fetch existing data and bind to form
  fetchAndBindData() {
    this.folioService.getPersonalDetails().subscribe((data: any) => {
      const response = data?.response?.[0];

      if (response) {
        // Populate projects
        if (response.projectsList?.length) {
          response.projectsList.forEach((project: any) =>
            this.addProject(project)
          );
        } else {
          this.addProject(); // Add an empty project if none exist
        }

        // Populate certifications
        if (response.certificationsList?.length) {
          response.certificationsList.forEach((certification: any) =>
            this.addCertification(certification)
          );
        } else {
          this.addCertification(); // Add an empty certification if none exist
        }
      } else {
        this.addProject();
        this.addCertification();
      }
    });
  }

  // Add a project (existing or new)
  addProject(projectData: any = {}) {
    this.projects.push(
      this.fb.group({
        id: projectData.id || null,
        name: [projectData.name || '', Validators.required],
        description: [projectData.description || '', Validators.required],
        technologyUsed: [projectData.technologyUsed || '', Validators.required],
        role: [projectData.role || '', Validators.required],
        githubLink: [projectData.githubLink || ''],
        liveUrl: [projectData.liveUrl || ''],
      })
    );
  }

  // Remove a project entry
  removeProject(index: number) {
    this.projects.removeAt(index);
  }

  // Add a certification (existing or new)
  addCertification(certificationData: any = {}) {
    this.certifications.push(
      this.fb.group({
        id: certificationData.id || null,
        name: [certificationData.name || '', Validators.required],
        issuingOrganization: [
          certificationData.issuingOrganization || '',
          Validators.required,
        ],
        dateIssued: [certificationData.dateIssued || '', Validators.required],
        dateOfExpiration: [certificationData.dateOfExpiration || ''],
        description: [certificationData.description || ''],
        image: [null], // For future image upload
      })
    );
  }

  // Remove a certification entry
  removeCertification(index: number) {
    this.certifications.removeAt(index);
  }

  // Handle form submission
  onSubmit() {
    if (this.educationAndCertificationsForm.valid) {
      const payload = {
        certifications:
          this.educationAndCertificationsForm.value.certifications,
        projects: this.educationAndCertificationsForm.value.projects,
      };

      this.folioService.saveProjectAndCertificatesDetails(payload).subscribe({
        next: (response) => {
          this.snackBar.open('Details saved successfully!', 'Close', {
            duration: 3000,
            panelClass: 'snackbar-success',
          });
          console.log('Success:', response);
        },
        error: (error) => {
          this.snackBar.open(
            'Failed to save details. Please try again.',
            'Close',
            {
              duration: 3000,
              panelClass: 'snackbar-error',
            }
          );
          console.error('Error:', error);
        },
      });
    } else {
      this.snackBar.open('Please fill out all required fields.', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-warning',
      });
    }
  }

  ngOnDestroy() {
    if (this.submitFormSubscription) {
      this.submitFormSubscription.unsubscribe();
    }
  }
}
