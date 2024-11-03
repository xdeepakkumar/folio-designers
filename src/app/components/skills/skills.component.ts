import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Include ReactiveFormsModule here
  template: `
    <div class="container-lg py-5">
      <div
        class="card mx-auto shadow-lg border-0"
        style="max-width: 650px; border-radius: 12px;"
      >
        <div class="card-body p-4">
          <h4 class="card-title mb-4 text-center text-primary">
            <b>Add Your Skills</b>
          </h4>
          <hr />

          <form [formGroup]="skillsForm" (ngSubmit)="onSubmit()">
            <div formArrayName="skills">
              <div
                *ngFor="let skill of skills.controls; let i = index"
                [formGroupName]="i"
                class="card mb-3 border-0 shadow-sm"
              >
                <div class="card-body p-4">
                  <h5 class="card-subtitle mb-3 text-secondary">
                    Skill {{ i + 1 }}
                  </h5>
                  <div class="row g-3">
                    <div class="col-12">
                      <label class="form-label fw-semibold">Skill</label>
                      <input
                        type="text"
                        formControlName="skillName"
                        class="form-control border-secondary-subtle"
                        placeholder="e.g., JavaScript, Python"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-semibold"
                        >Years of Experience</label
                      >
                      <input
                        type="number"
                        formControlName="yearsOfExperience"
                        class="form-control border-secondary-subtle"
                        placeholder="e.g., 3"
                        min="0"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label fw-semibold"
                        >Proficiency Level</label
                      >
                      <select
                        formControlName="proficiency"
                        class="form-select border-secondary-subtle"
                        required
                      >
                        <option disabled selected>Choose...</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-label fw-semibold">Description</label>
                      <textarea
                        formControlName="description"
                        class="form-control border-secondary-subtle"
                        rows="3"
                        placeholder="Describe your experience and achievements..."
                        required
                      ></textarea>
                    </div>
                    <div class="col-12 text-end">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm mt-3"
                        (click)="removeSkill(i)"
                      >
                        Remove Skill
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
                (click)="addSkill()"
              >
                Add Another Skill
              </button>
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
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }

      .card-subtitle {
        font-size: 1rem;
        font-weight: 500;
      }

      .btn-primary {
        background-color: #007bff;
        border: none;
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
      }

      .btn-outline-danger {
        font-size: 0.875rem;
        padding: 0.4rem 1rem;
      }

      .form-label {
        font-weight: 500;
        color: #495057;
      }

      input[type='text'],
      input[type='number'],
      select,
      textarea {
        border-radius: 6px;
      }
    `,
  ],
})
export class SkillsComponent {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([]), // Initialize with an empty FormArray for skills
    });

    // Add an initial skill entry
    this.addSkill();
  }

  // Getter to access the skills FormArray
  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  // Method to add a new skill FormGroup to the FormArray
  addSkill(): void {
    const skillGroup = this.fb.group({
      skillName: ['', Validators.required],
      yearsOfExperience: ['', [Validators.required, Validators.min(0)]],
      proficiency: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.skills.push(skillGroup);
  }

  // Method to remove a skill from the FormArray
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  // Submit function to log the form data
  onSubmit(): void {
    if (this.skillsForm.valid) {
      console.log(this.skillsForm.value);
    }
  }
}
