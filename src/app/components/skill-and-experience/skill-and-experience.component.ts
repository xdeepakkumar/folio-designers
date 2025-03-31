import { FolioService } from 'src/app/services/folio.service';
import { SkillsAndExperienceSubjectService } from 'src/app/services/subject/skills-and-experience-subject.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-skill-and-experience',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container-lg py-5">
      <form [formGroup]="skillAndexperienceForm">
        <div class="row g-4">
          <!-- Skills Card -->
          <div class="col-lg-6 col-12">
            <div class="card border-0" style="border-radius: 4px;">
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center"><b>ADD SKILLS</b></h4>
                <hr />
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
                            formControlName="name"
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
                            formControlName="experienceInYear"
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
                            formControlName="proficiencyLevel"
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
              </div>
            </div>
          </div>

          <!-- Experience Card -->
          <div class="col-lg-6 col-12">
            <div class="card border-0" style="border-radius: 4px;">
              <div class="card-body p-4">
                <h4 class="card-title mb-4 text-center">
                  <b>Add Your Experience</b>
                </h4>
                <hr />
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
                            formControlName="yearOfExperience"
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
                            formControlName="organization"
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
    `,
  ],
})
export class SkillAndExperienceComponent implements OnInit, OnDestroy {
  skillAndexperienceForm: FormGroup;
  private submitFormSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private formSubmitService: SkillsAndExperienceSubjectService,
    private folioService: FolioService,
    private snackBar: MatSnackBar
  ) {
    this.skillAndexperienceForm = this.fb.group({
      skills: this.fb.array([]),
      experiences: this.fb.array([]),
    });
  }

  // Getter for skills
  get skills(): FormArray {
    return this.skillAndexperienceForm.get('skills') as FormArray;
  }

  // Getter for experiences
  get experiences(): FormArray {
    return this.skillAndexperienceForm.get('experiences') as FormArray;
  }

  ngOnInit() {
    // Fetch data from API and populate skills and experience
    this.folioService.getPersonalDetails().subscribe((response: any) => {
      const responseData = response?.response?.[0];

      if (responseData?.skillsList?.length) {
        responseData.skillsList.forEach((skill: any) => {
          this.skills.push(this.createSkillFormGroup(skill));
        });
      } else {
        // Add an empty skill form if no data exists
        this.skills.push(this.createSkillFormGroup({}));
      }

      if (responseData?.experienceList?.length) {
        responseData.experienceList.forEach((experience: any) => {
          this.experiences.push(this.createExperienceFormGroup(experience));
        });
      } else {
        // Add an empty experience form if no data exists
        this.experiences.push(this.createExperienceFormGroup({}));
      }
    });

    // Subscribe to form submission trigger
    this.submitFormSubscription = this.formSubmitService.submitForm$.subscribe(
      () => {
        this.onSubmit();
      }
    );
  }

  createSkillFormGroup(skill: any) {
    return this.fb.group({
      id: [skill.id || null], // Handle existing skills with ID or new ones with null
      name: [skill.name, Validators.required],
      description: [skill.description, Validators.required],
      experienceInYear: [skill.experienceInYear, Validators.required],
      proficiencyLevel: [skill.proficiencyLevel, Validators.required],
    });
  }

  createExperienceFormGroup(experience: any) {
    return this.fb.group({
      id: [experience.id || null], // Handle existing experiences with ID or new ones with null
      role: [experience.role, Validators.required],
      description: [experience.description, Validators.required],
      organization: [experience.organization, Validators.required],
      yearOfExperience: [experience.yearOfExperience, Validators.required],
    });
  }

  addSkill() {
    this.skills.push(
      this.fb.group({
        id: [null], // New skill with null ID
        name: ['', Validators.required],
        description: ['', Validators.required],
        experienceInYear: ['', Validators.required],
        proficiencyLevel: ['', Validators.required],
      })
    );
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        id: [null], // New experience with null ID
        role: ['', Validators.required],
        description: ['', Validators.required],
        organization: ['', Validators.required],
        yearOfExperience: ['', Validators.required],
      })
    );
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }

  async onSubmit() {
    if (this.skillAndexperienceForm.valid) {
      const payload = {
        skills: this.skillAndexperienceForm.value.skills,
        experiences: this.skillAndexperienceForm.value.experiences,
      };

      try {
        // Wait for the API response
        await this.folioService
          .saveskillAndExperienceDetails(payload)
          .toPromise();
        // Show success message
        this.snackBar.open('Data saved successfully!', 'Close', {
          duration: 3000,
          panelClass: 'snackbar-success',
        });
      } catch (error) {
        // Show error message if API fails
        this.snackBar.open('Failed to save data. Please try again.', 'Close', {
          duration: 3000,
          panelClass: 'snackbar-error',
        });
        console.error('Error saving data:', error);
      }
    } else {
      this.snackBar.open(
        'Form is invalid. Please check your inputs.',
        'Close',
        { duration: 3000, panelClass: 'snackbar-warning' }
      );
    }
  }

  ngOnDestroy() {
    if (this.submitFormSubscription) {
      this.submitFormSubscription.unsubscribe();
    }
  }
}
