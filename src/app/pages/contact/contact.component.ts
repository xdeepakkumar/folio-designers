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
    <div class="container my-4">
      <h2
        class="text-center mat-h2 mb-1"
        style="color: #2a3d7c; font-size: 1.6rem;"
      >
        Contact Us
      </h2>
      <h5 class="text-center text-muted mb-5">
        We'd love to hear from you! Please fill out the form below to get in
        touch.
      </h5>

      <!-- Bootstrap Grid: Same row for large screens, stack for small -->
      <div class="row">
        <!-- Form Section -->
        <div class="col-md-6 form-section text-center">
          <h2>ONLINE INQUIRY</h2>
          <form (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email or phone"
                required
              />
            </div>
            <div class="mb-3">
              <select class="form-select" required>
                <option value="" disabled selected>Select An Interest</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            <div class="mb-3">
              <textarea
                rows="4"
                class="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              mat-raised-button
              style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
              type="submit"
              class="sign-in-button"
            >
              Submit
            </button>
          </form>
        </div>

        <!-- Contact Details Section -->
        <div class="col-md-6 details-section text-center">
          <h2 class="section-title">CONTACT DETAILS</h2>
          <p>
            <strong>Email:</strong>
            <a href="mailto:michelle@signature.com">michellesignature.com</a>
          </p>
          <p><strong>Phone:</strong> (908) 686-1200</p>
          <br />
          <p>
            <strong>Westfield:</strong> 233 North Avenue E.<br />Westfield, NJ
            07090
          </p>

          <br />
          <p>
            <strong>Summit:</strong> 357 Springfield Ave.<br />Short Hills, NJ
            07901
          </p>

          <br />
          <p>
            <strong>Short Hills Office:</strong> 549 Millburn Ave.<br />Short
            Hills, NJ 07078
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .form-section {
        padding: 1rem;
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      .details-section {
        padding: 1rem;
      }

      .details-section p {
        margin: 0.5rem 0;
      }

      form input,
      form select,
      form textarea {
        border-radius: 4px;
        border: 1px solid #ddd;
      }

      form button {
        margin-top: 1rem;
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
