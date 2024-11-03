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
  selector: 'app-education-and-certifications',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-5">
      <div class="row">
        <!-- Education Section -->
        <div class="col-lg-6 mb-4">
          <div
            class="card mx-auto shadow-lg border-0"
            style="border-radius: 12px;"
          >
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center text-primary">
                <b>Add Your Education</b>
              </h4>
              <hr />
              <form [formGroup]="educationAndCertificationsForm">
                <div formArrayName="educations">
                  <div
                    *ngFor="let education of educations.controls; let i = index"
                    [formGroupName]="i"
                    class="card mb-3 border-0 shadow-sm"
                  >
                    <div class="card-body p-4">
                      <h6 class="card-subtitle mb-3 text-secondary">
                        Education {{ i + 1 }}
                      </h6>
                      <div class="row g-3">
                        <div class="col-12">
                          <label class="form-label fw-semibold">Degree</label>
                          <input
                            type="text"
                            formControlName="degree"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., B.Sc., M.Tech"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Institution</label
                          >
                          <input
                            type="text"
                            formControlName="institution"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Harvard, MIT"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold"
                            >Year of Graduation</label
                          >
                          <input
                            type="number"
                            formControlName="graduationYear"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., 2020"
                            min="1900"
                            max="2100"
                            required
                          />
                        </div>
                        <div class="col-md-6">
                          <label class="form-label fw-semibold">Grade</label>
                          <input
                            type="text"
                            formControlName="grade"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., A, 3.5/4"
                            required
                          />
                        </div>
                        <div class="col-12 text-end">
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm mt-3"
                            (click)="removeEducation(i)"
                          >
                            Remove Education
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mt-4"
                    (click)="addEducation()"
                  >
                    Add Another Education
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
              <h4 class="card-title mb-4 text-center text-primary">
                <b>Add Your Certifications</b>
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
                    class="btn btn-primary btn-sm mt-4"
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
      educations: this.fb.array([]), // Initialize with an empty FormArray for educations
      certifications: this.fb.array([]), // Initialize with an empty FormArray for certifications
    });

    // Add an initial education and certification entry
    this.addEducation();
    this.addCertification();
  }

  // Getter to access the educations FormArray
  get educations(): FormArray {
    return this.educationAndCertificationsForm.get('educations') as FormArray;
  }

  // Getter to access the certifications FormArray
  get certifications(): FormArray {
    return this.educationAndCertificationsForm.get(
      'certifications'
    ) as FormArray;
  }

  // Method to add a new education entry
  addEducation() {
    this.educations.push(
      this.fb.group({
        degree: ['', Validators.required],
        institution: ['', Validators.required],
        graduationYear: [
          '',
          [Validators.required, Validators.min(1900), Validators.max(2100)],
        ],
        grade: ['', Validators.required],
      })
    );
  }

  // Method to remove an education entry
  removeEducation(index: number) {
    this.educations.removeAt(index);
  }

  // Method to add a new certification entry
  addCertification() {
    this.certifications.push(
      this.fb.group({
        certificationName: ['', Validators.required],
        issuingOrganization: ['', Validators.required],
        dateIssued: ['', Validators.required],
        expirationDate: [''],
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
