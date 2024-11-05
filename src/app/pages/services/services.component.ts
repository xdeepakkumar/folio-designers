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
    <div class="container my-5">
      <h2 class="text-center mb-4 mat-h2">Our Premium Services</h2>
      <h5 class="text-center mat-h5 text-muted mb-5">
        Select a service and let us handle the rest
      </h5>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <mat-card class="service-selection shadow-lg">
            <mat-card-content>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5395/5395993.png"
                alt="Service Icon"
                class="service-icon"
              />
              <mat-form-field appearance="fill" class="w-100 mt-3">
                <mat-label>Select Service</mat-label>
                <mat-select [(value)]="selectedService">
                  <mat-option
                    *ngFor="let service of services"
                    [value]="service"
                    >{{ service }}</mat-option
                  >
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

              <button
                mat-raised-button
                color="primary"
                class="w-100 mt-4 premium-button"
                (click)="sendRequest()"
              >
                Request Service
              </button>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <h3 class="text-center mt-5 mb-4 mat-h3">What Our Clients Say</h3>
      <div class="row">
        <div class="col-md-4" *ngFor="let testimonial of testimonials">
          <mat-card class="testimonial-card shadow border-0">
            <mat-card-content>
              <p class="text-muted">{{ testimonial.message }}</p>
              <p class="font-weight-bold">{{ testimonial.author }}</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .service-selection {
        margin-top: 20px;
        padding: 30px;
        border-radius: 15px;
        background-color: #ffffff; /* White background for the card */
        border: 1px solid #e0e0e0; /* Light border for a clean look */
        text-align: center; /* Center-align content */
        transition: box-shadow 0.3s; /* Smooth shadow transition */
      }

      .service-selection:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow on hover */
      }

      .service-icon {
        width: 100px; /* Define the size of the image */
        height: auto; /* Maintain aspect ratio */
        margin-bottom: 15px; /* Spacing below the image */
      }

      .premium-button {
        background-color: #007bff; /* Bootstrap primary color */
        color: white;
        font-weight: bold;
        text-transform: uppercase; /* Uppercase text */
        transition: background-color 0.3s; /* Smooth transition */
      }

      .premium-button:hover {
        background-color: #0056b3; /* Darker shade on hover */
      }

      .testimonial-card {
        margin-bottom: 30px;
        padding: 20px;
        text-align: center;
        border-radius: 15px;
        background-color: #f8f9fa; /* Light background for testimonials */
        border: none; /* Remove default border */
        transition: transform 0.2s; /* Smooth transform effect */
      }

      .testimonial-card:hover {
        transform: translateY(-5px); /* Lift effect on hover */
      }
    `,
  ],
})
export class ServicesComponent {
  services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'SEO Services',
  ];
  selectedService: string | undefined;
  userMessage: string = '';

  testimonials = [
    { message: 'Excellent service and support!', author: 'John Doe' },
    { message: 'Highly recommend their services!', author: 'Jane Smith' },
    { message: 'Professional and dedicated team!', author: 'Alice Johnson' },
  ];

  sendRequest() {
    if (this.selectedService && this.userMessage) {
      console.log(
        `Service: ${this.selectedService}, Message: ${this.userMessage}`
      );
      alert('Your request has been sent!');
      this.selectedService = undefined;
      this.userMessage = '';
    } else {
      alert('Please select a service and enter your message.');
    }
  }
}
