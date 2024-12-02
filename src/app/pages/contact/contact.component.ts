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
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <mat-card class="contact-card">
      <mat-card-content>
        <div class="container my-5">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
            Contact Us
          </h2>
          <h5 class="text-center text-muted mb-4">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </h5>

          <!-- Bootstrap Grid: Same row for large screens, stack for small -->
          <div class="row">
            <!-- Left column with contact form -->
            <div class="col-12 col-lg-6 col-md-12 mb-4">
              <mat-card class="form-card">
                <mat-card-header>
                  <mat-card-title
                    class="text-center mb-3"
                    style="color: black; font-weight: normal;"
                  >
                    Get in Touch
                  </mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                    <div class="form-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="form-group mb-3">
                      <input
                        type="email"
                        class="form-control"
                        formControlName="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="form-group mb-3">
                      <textarea
                        class="form-control"
                        formControlName="message"
                        rows="3"
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <button
                      mat-raised-button
                      color="primary"
                      type="submit"
                      [disabled]="contactForm.invalid"
                      class="w-100"
                    >
                      Send Message
                    </button>
                  </form>
                </mat-card-content>
              </mat-card>
            </div>

            <!-- Right column with Contact Us Type and image -->
            <div class="col-12 col-lg-6 col-md-12 mb-4">
              <mat-card class="form-card">
                <mat-card-header>
                  <mat-card-title
                    class="text-center mb-3"
                    style="color: black; font-weight: normal;"
                  >
                    How Can We Assist You?
                  </mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <ul class="list-unstyled mb-3" style="font-size: 0.9rem;">
                    <li>
                      <strong>Customer Support</strong>: For technical or
                      account issues or Share your thoughts with us.
                    </li>
                  </ul>
                  <div class="text-center">
                    <img
                      src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                      alt="Customer Service"
                      class="img-fluid rounded shadow"
                      style="width: 100%; max-width: 350px; height: auto; border-radius: 10px; max-height: 250px; object-fit: cover;"
                    />
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .contact-card {
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
      }

      .form-card {
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }

      .form-control {
        border-radius: 10px;
        padding: 15px;
        font-size: 1rem;
        border: 1px solid #ddd;
        margin-bottom: 20px;
      }

      mat-card-title {
        font-weight: normal;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .row {
        display: flex;
        gap: 30px;
      }

      .col-12 {
        flex: 1;
      }

      .list-unstyled li {
        margin-bottom: 10px;
        font-size: 0.9rem;
      }

      button {
        padding: 12px;
        border-radius: 10px;
      }

      .text-center {
        text-align: center;
      }

      img.img-fluid {
        width: 100%;
        max-width: 350px;
        height: auto;
        margin-top: 20px;
        border-radius: 10px;
        max-height: 250px; /* Reduce height for better layout */
        object-fit: cover; /* Maintain image aspect ratio */
      }
    `,
  ],
})
export class ContactComponent {
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
      console.log('Form submitted', this.contactForm.value);
      this.contactForm.reset(); // Reset the form after submission
    }
  }
}
