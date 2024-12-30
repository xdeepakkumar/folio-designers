import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <div class="container my-4">
      <h2
        class="text-center mat-h2 mb-1"
        style="color: #2a3d7c; font-size: 1.6rem;"
      >
        About Us
      </h2>
      <h5 class="text-center text-muted">
        We are committed to providing the best services for our clients.
      </h5>
      <div class="row">
        <div class="container my-3">
          <mat-card>
            <mat-card-content>
              <div class="row align-items-center">
                <!-- Left Section: Text Content -->
                <div class="col-md-6 mb-4">
                  <h6 class="text-uppercase text-primary">How It Started</h6>
                  <h1 class="fw-bold">
                    Our Dream is Global Professional Users Transformation
                  </h1>
                  <p class="text-muted" style="line-height: 1.8;">
                    Kawruh was founded by Robert Anderson, a passionate lifelong
                    learner, and Maria Sanchez, an visionary educator. Their
                    shared dream was to create a digital haven of knowledge
                    accessible to all. United by their belief in the
                    transformative power of education, they embarked on a
                    journey to build Kawruh.
                  </p>
                </div>

                <!-- Right Section: Image -->
                <div class="col-md-6 text-center">
                  <img
                    src="../../../assets/grup_pic.jpg"
                    alt="About Us"
                    class="img-fluid rounded-3 shadow-sm"
                  />
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <h2 class="section-title text-center mt-4 mb-4">Our Achievements</h2>

          <!-- Statistics Section -->
          <div class="row mt-3">
            <div class="col-md-3 mb-3">
              <mat-card>
                <mat-card-content>
                  <div class=" text-center p-1 rounded-3">
                    <h3 class="fw-bold mb-1">3.5+</h3>
                    <p class="text-muted mb-0">Years Experience</p>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
            <div class="col-md-3 mb-3">
              <mat-card>
                <mat-card-content>
                  <div class="text-center p-1 rounded-3">
                    <h3 class="fw-bold mb-1">23</h3>
                    <p class="text-muted mb-0">Project Challenges</p>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
            <div class="col-md-3 mb-3">
              <mat-card>
                <mat-card-content>
                  <div class="text-center p-1 rounded-3">
                    <h3 class="fw-bold mb-1">830+</h3>
                    <p class="text-muted mb-0">Positive Reviews</p>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
            <div class="col-md-3 mb-3">
              <mat-card>
                <mat-card-content>
                  <div class="text-center p-1 rounded-3">
                    <h3 class="fw-bold mb-1">100K</h3>
                    <p class="text-muted mb-0">Trusted Students</p>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
          </div>

          <h2 class="section-title text-center mt-4 mb-4">Meet Our CEO</h2>

          <mat-card>
            <mat-card-content>
              <!-- Meet Our CEO Section -->
              <div class="row mt-5">
                <div class="col-md-6 text-center">
                  <img
                    src="../../../assets/me.png"
                    alt="CEO Image"
                    class="img-fluid rounded-circle shadow-sm"
                    style="max-width: 250px;"
                  />
                </div>
                <div class="col-md-6">
                  <h2 class="fw-bold">Deepak Kumar</h2>
                  <p
                    class="text-muted"
                    style="line-height: 1.8; text-align: justify; "
                  >
                    <i>
                      Deepak K is the visionary behind Kawruh's success. With
                      over a decade of experience in the tech and education
                      industries, he has transformed Kawruh into a leading
                      platform for global learning. His innovative ideas and
                      unwavering commitment to quality make him an inspiration
                      for our entire team.
                    </i>
                  </p>
                  <p>
                    <button
                      mat-raised-button
                      style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                      type="submit"
                    >
                      Contact Deepak
                    </button>
                  </p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Global Styles */
      .section-title {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
        color: #333;
      }

      h1,
      h2 {
        font-size: 2.5rem;
        line-height: 1.4;
      }

      h3 {
        color: #343a40;
      }

      .bg-light {
        background-color: #f8f9fa !important;
      }

      p {
        font-size: 1rem;
        color: #6c757d;
      }
    `,
  ],
})
export class AboutComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Your message has been sent successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
