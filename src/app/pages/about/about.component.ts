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
    <div class="container">
      <h2
        class="text-center mat-h2 mb-1"
        style="color: #2a3d7c; font-size: 1.6rem;"
      >
        About Us
      </h2>
      <h5 class="text-center text-muted mb-4">
        We are committed to providing the best services for our clients.
      </h5>
      <div class="row">
        <div class="col-md-6 mb-4">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Our Mission</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-muted">
                Our mission is to deliver high-quality products and services
                that meet the needs of our clients and contribute to their
                success.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-md-6">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Our Vision</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="text-muted">
                We envision a world where our innovative solutions empower
                businesses to thrive and achieve their full potential.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <div class="row">
        <div class="text-center">
          <mat-card>
            <mat-card-header>
              <mat-card-title class="mat-h2 mb-4">Contact Us</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    formControlName="name"
                    placeholder="Enter your name"
                    aria-label="Your Name"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    formControlName="email"
                    placeholder="Enter your email"
                    aria-label="Your Email"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <textarea
                    class="form-control"
                    formControlName="message"
                    rows="4"
                    placeholder="Write your message here"
                    aria-label="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  mat-raised-button
                  color="primary"
                  type="submit"
                  [disabled]="contactForm.invalid"
                  class="submit-button"
                >
                  Send Message
                </button>
              </form>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .section-title {
        color: #2a3d7c;
        font-size: 1.6rem;
      }

      .section-subtitle {
        font-size: 1.1rem;
      }

      .about-card {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .about-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }

      .contact-card {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      .submit-button {
        transition: background-color 0.3s ease, transform 0.2s ease;
        width: 100%;
      }

      .submit-button:hover {
        background-color: #1e5ab6;
        transform: translateY(-2px);
      }

      mat-card-title {
        font-size: 1.25rem;
      }

      mat-card-content p {
        color: #333;
      }

      .form-control {
        border-radius: 10px;
        padding: 12px;
        font-size: 1rem;
        border: 1px solid #ddd;
      }

      @media (max-width: 768px) {
        .section-title,
        .section-subtitle {
          text-align: left;
        }
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
