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
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
            Our Premium Services
          </h2>
          <h5 class="text-center text-muted mb-4">
            Select a service and let us handle the rest with professionalism and
            expertise.
          </h5>

          <!-- Service Request Section -->
          <div class="row justify-content-center align-items-stretch">
            <!-- Form Section -->
            <div class="col-12 col-md-6">
              <mat-card class="service-selection">
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
                      class="get-started-button mt-3"
                      (click)="sendRequest()"
                    >
                      Request Service
                    </button>
                  </div>
                </mat-card-content>
              </mat-card>
            </div>

            <!-- Image Section -->
            <div class="col-12 col-md-6 image-container">
              <img
                src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwM3wwfDF8c2VhcmNofDJ8fHRlY2hub2xvZ3l8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Tech Image"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .service-selection {
        margin-top: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        text-align: center;
        height: 100%; /* Ensure the form takes up the full height of its container */
      }

      /* Image Section Styles */
      .image-container {
        justify-content: center;
        align-items: center;
        height: 100%; /* Make the image container stretch to the same height as the form */
        padding: 10px;
        overflow: hidden; /* Ensure the image doesn't overflow */
        border-radius: 12px;
      }

      .image-container img {
        max-width: 130%;
        height: 260%; /* Ensure the image stretches to fit the container's height */
        object-fit: cover; /* Maintain aspect ratio while covering the container */
      }

      @media (max-width: 767px) {
        /* Hide the image on smaller screens */
        .image-container {
          display: none;
        }

        .service-selection {
          padding: 15px;
        }

        h2 {
          font-size: 1.5em;
        }

        .get-started-button {
          width: 100%;
        }
      }

      @media (min-width: 768px) {
        .row {
          display: flex;
          align-items: stretch; /* Ensure form and image are aligned vertically */
        }

        .col-md-6 {
          display: flex;
          flex-direction: column;
          height: 100%; /* Ensure both the form and image sections are the same height */
        }
      }

      .get-started-button:hover {
        background-color: #0056b3;
      }

      mat-form-field {
        margin-bottom: 20px;
        width: 98%;
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
