import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Make sure ReactiveFormsModule is imported
  template: `
    <div class="container-lg py-5">
      <div class="row">
        <!-- Personal Information Section -->
        <div class="col-lg-6 mb-4">
          <div
            class="card mx-auto shadow-lg border-0"
            style="max-width: 650px; border-radius: 12px;"
          >
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">PERSONAL INFORMATION</h4>
              <hr />
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputFirstName" class="form-label fw-semibold"
                    >First Name</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputFirstName"
                    placeholder="John"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputLastName" class="form-label fw-semibold"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputLastName"
                    placeholder="Doe"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputEmail" class="form-label fw-semibold"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control border-secondary-subtle"
                    id="inputEmail"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label fw-semibold"
                    >Address</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputAddress"
                    placeholder="Sector 22, Noida, India"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label fw-semibold"
                    >City</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputCity"
                    placeholder="Noida"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label fw-semibold"
                    >State</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputState"
                    placeholder="Uttar Pradesh"
                    required
                  />
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label fw-semibold"
                    >Zip</label
                  >
                  <input
                    type="text"
                    class="form-control border-secondary-subtle"
                    id="inputZip"
                    placeholder="201301"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputLinkedIn" class="form-label fw-semibold"
                    >LinkedIn Profile</label
                  >
                  <input
                    type="url"
                    class="form-control border-secondary-subtle"
                    id="inputLinkedIn"
                    placeholder="https://www.linkedin.com/in/username"
                    required
                  />
                </div>
                <div class="col-12">
                  <label for="inputLinkedIn" class="form-label fw-semibold"
                    >Facebook Profile</label
                  >
                  <input
                    type="url"
                    class="form-control border-secondary-subtle"
                    id="inputFacebook"
                    placeholder="https://www.facebook.com/in/username"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="col-lg-6 mb-2">
          <div
            class="card mx-auto shadow-lg border-0"
            style="border-radius: 12px;"
          >
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">
                <b>ADD EDUCATION DETAILS</b>
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
                      <p class="card-subtitle mb-4">Education {{ i + 1 }}</p>
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
                    class="btn btn-outline-success btn-sm mt-4 mb-3"
                    (click)="addEducation()"
                  >
                    Add Another Education
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
      .card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }

      .card-title {
        font-weight: 600;
      }

      .form-label {
        font-weight: 500;
        color: #495057;
      }

      input[type='text'],
      input[type='email'],
      input[type='url'],
      input[type='number'],
      select,
      textarea {
        border-radius: 6px;
      }

      @media (max-width: 768px) {
        .row {
          flex-direction: column;
        }

        .col-lg-6 {
          width: 100%;
        }
      }
    `,
  ],
})
export class PersonalInfoComponent {
  educationAndCertificationsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.educationAndCertificationsForm = this.fb.group({
      educations: this.fb.array([]), // Initialize with an empty FormArray for educations
    });

    // Add an initial education entry
    this.addEducation();
  }

  // Getter to access the educations FormArray
  get educations(): FormArray {
    return this.educationAndCertificationsForm.get('educations') as FormArray;
  }

  // Method to add a new education form group
  addEducation() {
    const educationGroup = this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      graduationYear: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(2100)],
      ],
      grade: ['', Validators.required],
    });

    this.educations.push(educationGroup);
  }

  // Method to remove an education form group by index
  removeEducation(index: number) {
    this.educations.removeAt(index);
  }
}
