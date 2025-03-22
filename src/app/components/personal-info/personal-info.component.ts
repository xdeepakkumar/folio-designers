import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { FolioService } from 'src/app/services/folio.service';
import { FormSubmitService } from 'src/app/services/form-submit.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Make sure ReactiveFormsModule is imported
  template: `
    <div class="container-lg py-5">
      <form [formGroup]="educationAndCertificationsForm">
        <div class="row">
          <!-- Personal Information Section -->
          <div class="col-lg-6 mb-2">
            <div
              class="card mx-auto border-0"
              style="max-width: 650px; border-radius: 4px;"
            >
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center">
                  PERSONAL INFORMATION
                </h4>
                <hr />
                <div class="row g-3">
                  <!-- First Name -->
                  <div class="col-md-6">
                    <label for="inputFirstName" class="form-label fw-semibold"
                      >First Name</label
                    >
                    <input
                      type="text"
                      formControlName="firstName"
                      class="form-control border-secondary-subtle"
                      id="inputFirstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <!-- Last Name -->
                  <div class="col-md-6">
                    <label for="inputLastName" class="form-label fw-semibold"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      formControlName="lastName"
                      class="form-control border-secondary-subtle"
                      id="inputLastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <!-- Email -->
                  <div class="col-12">
                    <label for="inputEmail" class="form-label fw-semibold"
                      >Email</label
                    >
                    <input
                      type="email"
                      formControlName="email"
                      class="form-control border-secondary-subtle"
                      id="inputEmail"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <!-- Address -->
                  <div class="col-12">
                    <label for="inputAddress" class="form-label fw-semibold"
                      >Address</label
                    >
                    <input
                      type="text"
                      formControlName="address"
                      class="form-control border-secondary-subtle"
                      id="inputAddress"
                      placeholder="Sector 22, Noida, India"
                      required
                    />
                  </div>
                  <!-- City -->
                  <div class="col-md-5">
                    <label for="inputCity" class="form-label fw-semibold"
                      >City</label
                    >
                    <input
                      type="text"
                      formControlName="city"
                      class="form-control border-secondary-subtle"
                      id="inputCity"
                      placeholder="Noida"
                      required
                    />
                  </div>
                  <!-- State -->
                  <div class="col-md-4">
                    <label for="inputState" class="form-label fw-semibold"
                      >State</label
                    >
                    <input
                      type="text"
                      formControlName="state"
                      class="form-control border-secondary-subtle"
                      id="inputState"
                      placeholder="Uttar Pradesh"
                      required
                    />
                  </div>
                  <!-- Zip -->
                  <div class="col-md-3">
                    <label for="inputZip" class="form-label fw-semibold"
                      >Zip</label
                    >
                    <input
                      type="text"
                      formControlName="zip"
                      class="form-control border-secondary-subtle"
                      id="inputZip"
                      placeholder="201301"
                      required
                    />
                  </div>
                  <!-- LinkedIn -->
                  <div class="col-12">
                    <label for="inputLinkedIn" class="form-label fw-semibold"
                      >LinkedIn Profile</label
                    >
                    <input
                      type="url"
                      formControlName="linkedIn"
                      class="form-control border-secondary-subtle"
                      id="inputLinkedIn"
                      placeholder="https://www.linkedin.com/in/username"
                      required
                    />
                  </div>
                  <!-- Facebook -->
                  <div class="col-12">
                    <label for="inputFacebook" class="form-label fw-semibold"
                      >Facebook Profile</label
                    >
                    <input
                      type="url"
                      formControlName="facebook"
                      class="form-control border-secondary-subtle"
                      id="inputFacebook"
                      placeholder="https://www.facebook.com/in/username"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Education Section -->
          <div class="col-lg-6 mb-2">
            <div class="card mx-auto border-0" style="border-radius: 4px;">
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center">
                  <b>ADD EDUCATION DETAILS</b>
                </h4>
                <hr />
                <div>
                  <div formArrayName="educations">
                    <div
                      *ngFor="
                        let education of educations.controls;
                        let i = index
                      "
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
export class PersonalInfoComponent implements OnInit, OnDestroy {
  educationAndCertificationsForm: FormGroup;
  private formDataSubject = new BehaviorSubject<any>(null);
  private submitFormSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private folioService: FolioService,
    private formSubmitService: FormSubmitService
  ) {
    this.educationAndCertificationsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      linkedIn: ['', Validators.required],
      facebook: ['', Validators.required],
      educations: this.fb.array([]), // Keeps track of the educations array
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

  // Method to get the current form data and pass it to the service
  saveData() {
    const formData = this.educationAndCertificationsForm.value;
    this.folioService.savePersonalDetails(formData).subscribe({
      next: (response) => {
        console.log('Data saved successfully', response);
        // After saving the data, bind the response data to the form
        this.bindFormData(response);
      },
      error: (error) => {
        console.error('Error saving data', error);
      },
    });
  }

  // Fetch personal details when the component initializes
  ngOnInit() {
    // Fetch personal details and bind them to the form
    this.folioService.getPersonalDetails().subscribe({
      next: (response: any) => {
        // Check if the response contains the personal details object
        if (response && response.response && response.response.length > 0) {
          this.bindFormData(response.response[0]); // Bind the first entry from the response array
        } else {
          // If no data is found, you can reset the form with default values (optional)
          this.educationAndCertificationsForm.reset();
        }
      },
      error: (err) => {
        console.error('Error fetching personal details', err);
      },
    });

    // Subscribe to form submission trigger
    this.submitFormSubscription = this.formSubmitService.submitForm$.subscribe(
      () => {
        this.saveData();
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.submitFormSubscription) {
      this.submitFormSubscription.unsubscribe();
    }
  }

  bindFormData(personalDetails: any) {
    // Bind personal details to the form
    this.educationAndCertificationsForm.patchValue({
      firstName: personalDetails.firstName || '',
      lastName: personalDetails.lastName || '',
      email: personalDetails.email || '',
      address: personalDetails.address || '',
      city: personalDetails.city || '',
      state: personalDetails.state || '',
      zip: personalDetails.zip || '',
      linkedIn: personalDetails.linkedIn || '',
      facebook: personalDetails.facebook || '',
    });

    // Clear the existing educations form array before binding new data
    this.educations.clear();

    // If there are educations in the response, populate the educations form array
    debugger;
    if (
      personalDetails.educationDetailsList &&
      Array.isArray(personalDetails.educationDetailsList)
    ) {
      debugger;
      personalDetails.educationDetailsList.forEach((education: any) => {
        this.addEducation(); // Add a new form group for each education entry
        const educationFormGroup = this.educations.at(
          this.educations.length - 1
        ) as FormGroup; // Get the last form group added
        educationFormGroup.patchValue({
          degree: education.degree || '',
          institution: education.institution || '',
          graduationYear: education.graduationYear || '',
          grade: education.grade || '',
        });
      });
    }
  }
}
