import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-4">
      <div
        class="card shadow border-0 mx-auto"
        style="border-radius: 12px; max-width: 700px;"
      >
        <div class="card-body p-3">
          <h4 class="card-title mb-3 text-center">
            <b>ADDITIONAL INFORMATION</b>
          </h4>
          <form [formGroup]="additionalInfoForm" (ngSubmit)="onSubmit()">
            <!-- Select Template -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Select Template</label>
              <div class="row">
                <div
                  class="col-6 col-md-4 mb-3"
                  *ngFor="let template of templates"
                >
                  <div
                    class="card border-secondary-subtle shadow-sm"
                    (click)="selectTemplate(template)"
                    [class.selected]="
                      additionalInfoForm.get('template')?.value ===
                      template.name
                    "
                  >
                    <img
                      [src]="template.image"
                      class="card-img-top"
                      alt="{{ template.name }}"
                      style="height: 150px; object-fit: cover; border-radius: 12px 12px 0 0;"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-title">{{ template.name }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slider Option -->
            <div class="form-check mb-3">
              <input
                type="checkbox"
                formControlName="slider"
                class="form-check-input"
                checked
              />
              <label class="form-check-label">
                Want any slider (default is true)
              </label>
            </div>

            <!-- Upload Resume -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Upload Resume</label>
              <input
                type="file"
                formControlName="resume"
                class="form-control border-secondary-subtle"
              />
            </div>

            <!-- Live Your Profile -->
            <div class="form-check mb-3">
              <input
                type="checkbox"
                formControlName="liveProfile"
                class="form-check-input"
              />
              <label class="form-check-label">Live Your Profile</label>
            </div>
          </form>
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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }
      .card.selected {
        border: 2px solid #007bff; /* Highlight selected template */
      }
      @media (min-width: 768px) {
        .card {
          max-width: 600px; /* Control the max width for larger screens */
        }
      }
    `,
  ],
})
export class AdditionalInfoComponent {
  additionalInfoForm: FormGroup;
  templates = [
    {
      name: 'Template 1',
      image:
        'https://images.unsplash.com/photo-1541598599844-19a0319b8846?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Unsplash image URL
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

  constructor(private fb: FormBuilder) {
    this.additionalInfoForm = this.fb.group({
      template: [''], // Default to no template selected
      slider: [true], // Default value for the slider option
      resume: [null], // For the uploaded resume file
      liveProfile: [false], // Default value for the Live Your Profile toggle
    });
  }

  selectTemplate(template: any) {
    this.additionalInfoForm.patchValue({ template: template.name });
  }

  // Handle form submission
  onSubmit() {
    if (this.additionalInfoForm.valid) {
      console.log(this.additionalInfoForm.value);
      // Handle the additional info submission logic here
    }
  }
}
