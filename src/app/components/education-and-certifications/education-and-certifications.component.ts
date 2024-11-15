import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-education-and-certifications', // Keeping the same selector name
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-5">
      <div class="row">
        <!-- Project Section -->
        <div class="col-lg-6 mb-4">
          <div
            class="card mx-auto shadow-lg border-0"
            style="border-radius: 12px;"
          >
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">
                <b>ADD PROJECT DETAILS</b>
              </h4>
              <hr />
              <form [formGroup]="educationAndCertificationsForm">
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
                            formControlName="projectName"
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
                            formControlName="technologiesUsed"
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
                            formControlName="githubRepo"
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
              </form>
            </div>
          </div>
        </div>

        <!-- Certifications Section -->
        <div class="col-lg-6 mb-4">
          <div
            class="card mx-auto shadow-lg border-0"
            style="border-radius: 12px;"
          >
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">
                <b>ADD YOUR CERTIFICATION DETAILS</b>
              </h4>
              <hr />
              <form [formGroup]="educationAndCertificationsForm">
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
                            formControlName="certificationName"
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
                            formControlName="expirationDate"
                            class="form-control border-secondary-subtle"
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Certification Description</label
                          >
                          <textarea
                            formControlName="certificationDescription"
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
                            formControlName="certificationImage"
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
              </form>
            </div>
          </div>
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
export class EducationAndCertificationsComponent {
  educationAndCertificationsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.educationAndCertificationsForm = this.fb.group({
      projects: this.fb.array([]), // Initialize with an empty FormArray for projects
      certifications: this.fb.array([]), // Initialize with an empty FormArray for certifications
    });

    // Add an initial project and certification entry
    this.addProject();
    this.addCertification();
  }

  // Getter to access the projects FormArray
  get projects(): FormArray {
    return this.educationAndCertificationsForm.get('projects') as FormArray;
  }

  // Getter to access the certifications FormArray
  get certifications(): FormArray {
    return this.educationAndCertificationsForm.get(
      'certifications'
    ) as FormArray;
  }

  // Method to add a new project entry
  addProject() {
    this.projects.push(
      this.fb.group({
        projectName: ['', Validators.required],
        description: ['', Validators.required],
        technologiesUsed: ['', Validators.required],
        role: ['', Validators.required],
        githubRepo: [''],
        liveUrl: [''],
      })
    );
  }

  // Method to remove a project entry
  removeProject(index: number) {
    this.projects.removeAt(index);
  }

  // Method to add a new certification entry
  addCertification() {
    this.certifications.push(
      this.fb.group({
        certificationName: ['', Validators.required],
        issuingOrganization: ['', Validators.required],
        dateIssued: ['', Validators.required],
        expirationDate: [''],
        certificationDescription: [''],
        certificationImage: [null], // For image upload
      })
    );
  }

  // Method to remove a certification entry
  removeCertification(index: number) {
    this.certifications.removeAt(index);
  }

  // Method to handle form submission
  onSubmit() {
    if (this.educationAndCertificationsForm.valid) {
      console.log(this.educationAndCertificationsForm.value);
      // Handle form submission logic here
    }
  }
}
