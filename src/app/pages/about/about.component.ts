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
    <div class="container my-5">
      <h2 class="text-center mat-h2 mb-4">About Us</h2>
      <p class="text-center text-muted mb-4">
        We are committed to providing the best services for our clients.
      </p>
      <div class="row">
        <div class="col-md-6 mb-4">
          <mat-card class="about-card">
            <mat-card-header>
              <mat-card-title>Our Mission</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>
                Our mission is to deliver high-quality products and services
                that meet the needs of our clients and contribute to their
                success.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-md-6 mb-4">
          <mat-card class="about-card">
            <mat-card-header>
              <mat-card-title>Our Vision</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>
                We envision a world where our innovative solutions empower
                businesses to thrive and achieve their full potential.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <div class="text-center">
        <mat-card class="contact-card mt-5">
          <mat-card-header class="text-center">
            <mat-card-title class="mat-h2 mb-4">Contact Us</mat-card-title>
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
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                mat-raised-button
                color="primary"
                type="submit"
                [disabled]="contactForm.invalid"
              >
                Send Message
              </button>
            </form>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
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

      mat-card-title {
        font-size: 1.25rem;
        font-weight: bold;
      }

      mat-card-content p {
        color: #333;
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
      console.log('Form submitted', this.contactForm.value);
      // Handle the form submission logic, e.g., send data to a server
      this.contactForm.reset(); // Reset the form after submission
    }
  }
}
