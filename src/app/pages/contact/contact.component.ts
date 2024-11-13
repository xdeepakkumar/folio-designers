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
    <mat-card>
      <mat-card-content>
        <div class="container my-5">
          <h2 class="text-center mat-h2 mb-4">Contact Us</h2>
          <p class="text-center text-muted mb-4">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>

          <div class="text-center">
            <mat-card class="contact-card mt-4">
              <mat-card-header>
                <mat-card-title class="mb-3">Get in Touch</mat-card-title>
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
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .contact-card {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }

      mat-card-title {
        font-size: 1.25rem;
        font-weight: bold;
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
      // Handle the form submission logic, e.g., send data to a server
      this.contactForm.reset(); // Reset the form after submission
    }
  }
}
