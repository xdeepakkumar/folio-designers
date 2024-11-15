import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container my-5">
          <h2 class="text-center mat-h2 mb-1" style="color: #2a3d7c;  font-size: 1.6rem;">
            Our Premium Services
          </h2>
          <h5 class="text-center text-muted mb-4">
            Select a service and let us handle the rest with professionalism and
            expertise.
          </h5>

          <!-- Service Request Form -->
          <div class="row justify-content-center">
            <div class="col-12 col-md-8">
              <mat-card class="service-selection shadow-lg">
                <mat-card-content>
                  <mat-form-field appearance="fill" class="w-100 mt-3">
                    <mat-label>Email or Phone</mat-label>
                    <input
                      matInput
                      [(ngModel)]="userEmail"
                      type="email"
                      placeholder="Enter your email or phone number"
                    />
                  </mat-form-field>

                  <mat-form-field appearance="fill" class="w-100 mt-3">
                    <mat-label>Select Service</mat-label>
                    <mat-select [(value)]="selectedService">
                      <mat-option
                        *ngFor="let service of services"
                        [value]="service"
                      >
                        {{ service }}
                      </mat-option>
                    </mat-select>
                  </mat-form-field>

                  <mat-form-field appearance="fill" class="w-100 mt-3">
                    <mat-label>Your Message</mat-label>
                    <textarea
                      matInput
                      [(ngModel)]="userMessage"
                      rows="4"
                      placeholder="Describe your needs..."
                    ></textarea>
                  </mat-form-field>

                  <div class="text-center">
                    <button
                      mat-raised-button
                      color="primary"
                      class="get-started-button mt-4"
                      (click)="sendRequest()"
                    >
                      Request Service
                    </button>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>
          </div>

          <!-- Testimonials Section -->
          <h3 class="text-center mt-5 mb-4 mat-h3">What Our Clients Say</h3>
          <div class="row">
            <div
              class="col-12 col-md-4"
              *ngFor="let testimonial of testimonials"
            >
              <mat-card class="testimonial-card">
                <mat-card-content class="text-center">
                  <!-- Client Image and Name Section -->
                  <div class="testimonial-header">
                    <img
                      class="testimonial-image"
                      [src]="testimonial.image"
                      alt="{{ testimonial.author }}"
                    />
                    <div class="testimonial-name">
                      <p class="font-weight-bold">{{ testimonial.author }}</p>
                    </div>
                  </div>
                  <p class="text-muted">{{ testimonial.message }}</p>
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
      .service-selection {
        margin-top: 20px;
        padding: 30px;
        border-radius: 15px;
        background-color: #ffffff; /* Clean white background */
        border: 1px solid #e0e0e0; /* Subtle border for contrast */
        text-align: center; /* Center-align content */
        transition: box-shadow 0.3s; /* Smooth shadow transition */
      }

      .service-selection:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Elevated shadow effect */
      }

      .testimonial-card {
        margin-bottom: 30px;
        padding: 20px;
        text-align: center;
        border-radius: 15px;
        background-color: #f9fafb; /* Light gray background for testimonial cards */
        border: none;
        transition: transform 0.2s ease; /* Smooth transform on hover */
      }

      .testimonial-card:hover {
        transform: translateY(-5px); /* Slight lift on hover */
      }

      /* Client Image and Name Styling */
      .testimonial-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
      }

      .testimonial-image {
        width: 60px;
        height: 60px;
        border-radius: 50%; /* Circular client image */
        margin-right: 15px;
        object-fit: cover;
      }

      .testimonial-name {
        font-size: 1.1em;
        font-weight: 600;
      }

      /* Responsive Design for Small Screens */
      @media (max-width: 767px) {
        .service-selection {
          padding: 20px; /* Less padding on small screens */
        }

        .testimonial-card {
          margin-bottom: 20px;
          padding: 15px;
        }

        h2 {
          font-size: 1.8em; /* Smaller header size for mobile */
        }

        h3.mat-h3 {
          font-size: 1.5em; /* Adjust testimonial section header for small screens */
        }
      }

      .get-started-button:hover {
        background-color: #0056b3;
      }

      /* General Text Styling */
      mat-form-field {
        margin-bottom: 20px;
        width: 100%;
      }

      .small-raised-button {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class ServicesComponent {
  services = [
    'Portfolio Services',
    'Resume Services',
    'Web Services',
    'SEO Services',
  ];
  selectedService: string | undefined;
  userMessage: string = '';
  userEmail: string = '';
  userPhone: string = '';

  testimonials = [
    {
      message: 'Excellent service and support!',
      author: 'John Doe',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
    },
    {
      message: 'Highly recommend their services!',
      author: 'Jane Smith',
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
    },
    {
      message: 'Professional and dedicated team!',
      author: 'Alice Johnson',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
    },
  ];

  sendRequest() {
    if (
      this.selectedService &&
      this.userMessage &&
      this.userEmail &&
      this.userPhone
    ) {
      console.log(
        `Service: ${this.selectedService}, Message: ${this.userMessage}, Email: ${this.userEmail}, Phone: ${this.userPhone}`
      );
      alert('Your request has been sent!');
      this.selectedService = undefined;
      this.userMessage = '';
      this.userEmail = '';
      this.userPhone = '';
    } else {
      alert('Please fill in all the fields before submitting.');
    }
  }
}
