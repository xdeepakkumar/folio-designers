import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-skill-and-experience',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-5">
      <div class="row g-4">
        <!-- Skills Card -->
        <div class="col-lg-6 col-12">
          <div class="card shadow-lg border-0" style="border-radius: 12px;">
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">
                <b>ADD SKILLS</b>
              </h4>
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
                          <label class="form-label fw-semibold"
                            >Skill Name</label
                          >
                          <input
                            type="text"
                            formControlName="skillName"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., JavaScript, Python"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Description</label
                          >
                          <textarea
                            formControlName="description"
                            class="form-control border-secondary-subtle"
                            placeholder="Describe your skill..."
                            required
                          ></textarea>
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
                    class="btn btn-outline-success btn-sm mt-4"
                    (click)="addSkill()"
                  >
                    Add Another Skill
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Experience Card -->
        <div class="col-lg-6 col-12">
          <div class="card shadow-lg border-0" style="border-radius: 12px;">
            <div class="card-body p-4">
              <h4 class="card-title mb-4 text-center">
                <b>Add Your Experience</b>
              </h4>
              <form [formGroup]="experienceForm" (ngSubmit)="onSubmit()">
                <div formArrayName="experiences">
                  <div
                    *ngFor="
                      let experience of experiences.controls;
                      let i = index
                    "
                    [formGroupName]="i"
                    class="card mb-3 border-0 shadow-sm"
                  >
                    <div class="card-body p-4">
                      <h5 class="card-subtitle mb-3 text-secondary">
                        Experience {{ i + 1 }}
                      </h5>
                      <div class="row g-3">
                        <div class="col-md-6">
                          <label class="form-label fw-semibold">Role</label>
                          <input
                            type="text"
                            formControlName="role"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Senior Developer"
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
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Experience Description</label
                          >
                          <textarea
                            formControlName="description"
                            class="form-control border-secondary-subtle"
                            placeholder="Describe your experience..."
                            required
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <label class="form-label fw-semibold"
                            >Organization Name</label
                          >
                          <input
                            type="text"
                            formControlName="organizationName"
                            class="form-control border-secondary-subtle"
                            placeholder="e.g., Google"
                            required
                          />
                        </div>
                        <div class="col-12 text-end">
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm mt-3"
                            (click)="removeExperience(i)"
                          >
                            Remove Experience
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
                    (click)="addExperience()"
                  >
                    Add Another Experience
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
    `,
  ],
})
export class SkillAndExperienceComponent {
  skillsForm: FormGroup;
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([]),
    });

    this.experienceForm = this.fb.group({
      experiences: this.fb.array([]),
    });

    // Initialize with one skill and one experience
    this.addSkill();
    this.addExperience();
  }

  // Getter for skills
  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  // Getter for experiences
  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  addSkill() {
    this.skills.push(
      this.fb.group({
        skillName: ['', Validators.required],
        description: ['', Validators.required], // New description field
        yearsOfExperience: ['', Validators.required],
        proficiency: ['', Validators.required],
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        role: ['', Validators.required], // New role field
        description: ['', Validators.required], // New description field
        organizationName: ['', Validators.required],
        yearsOfExperience: ['', Validators.required],
      })
    );
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }

  onSubmit() {
    if (this.skillsForm.valid && this.experienceForm.valid) {
      console.log('Skills:', this.skillsForm.value);
      console.log('Experiences:', this.experienceForm.value);
      // Handle submission logic
    }
  }
}
