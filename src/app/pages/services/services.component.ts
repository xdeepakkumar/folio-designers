import { Component, OnInit, OnDestroy } from '@angular/core';
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
    <div class="container">
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
                <mat-label>Describe your needs...</mat-label>
                <textarea
                  matInput
                  [(ngModel)]="userMessage"
                  rows="3"
                  placeholder="Describe your needs..."
                ></textarea>
              </mat-form-field>

              <div class="text-center">
                <button
                  mat-raised-button
                  class="get-started-button mt-3"
                  (click)="sendRequest()"
                  style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                >
                  Request Service
                </button>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Global styling for Angular Material Raised Buttons */
      .button.mat-raised-button {
        color: white; /* White text on buttons */
        border-radius: 30px; /* Rounded corners for a smooth button look */
        padding: 12px 24px; /* Padding for the button */
        font-size: 16px; /* Font size */
        text-transform: uppercase; /* Uppercase text */
        border: none; /* Remove default border */
        transition: background-color 0.3s ease-in-out; /* Smooth transition for hover effect */
      }

      /* Apply the gradient to primary and secondary buttons globally */
      button.mat-raised-button.mat-button-primary {
        background: var(
          --primary-gradient
        ); /* Apply the gradient to primary button */
      }

      button.mat-raised-button.mat-button-secondary {
        background: var(
          --primary-gradient
        ); /* Apply the gradient to secondary button */
      }

      /* Hover effect for primary and secondary buttons */
      button.mat-raised-button.mat-button-primary:hover,
      button.mat-raised-button.mat-button-secondary:hover {
        background: linear-gradient(
          135deg,
          #732d91,
          #16a085
        ); /* Reverse the gradient on hover */
      }

      .main-card {
        border-radius: 12px;
        padding: 20px;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .service-selection {
        margin-top: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        text-align: center;
        height: auto;
        padding: 20px;
      }

      @media (max-width: 767px) {
        .testimonial-slider {
          flex-direction: column;
          align-items: center;
        }

        .testimonial-card {
          width: 100%;
          margin-bottom: 20px;
        }

        .testimonial-container {
          width: 100%;
        }
      }

      @media (min-width: 768px) {
        .testimonial-slider {
          flex-direction: row;
        }

        .testimonial-card {
          width: 33.33%;
        }
      }
    `,
  ],
})
export class ServicesComponent implements OnInit, OnDestroy {
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
      name: 'John Doe',
      comment:
        'Fantastic service! My portfolio looks amazing, thank you for the support!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      comment:
        'The resume services were top-notch. Highly recommend to anyone looking for professional help.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'David Wilson',
      comment:
        'The web development team delivered exactly what I needed. Great experience overall.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Sarah Lee',
      comment:
        'SEO services helped us boost our traffic in no time. Great results!',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Michael Brown',
      comment:
        'Excellent resume! My job search has never been easier. Thank you so much!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
  ];

  visibleTestimonials = this.testimonials.slice(0, 3);
  currentTestimonialIndex: number = 0;
  testimonialInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  startAutoSlide() {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 3000); // Auto slide every 3 seconds
  }

  nextTestimonial() {
    // Move to the next set of testimonials, wrap around if necessary
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.visibleTestimonials = this.testimonials.slice(
      this.currentTestimonialIndex,
      this.currentTestimonialIndex + 3
    );

    // Ensure that only 3 testimonials are displayed at a time
    if (this.visibleTestimonials.length < 3) {
      const remaining = 3 - this.visibleTestimonials.length;
      this.visibleTestimonials.push(...this.testimonials.slice(0, remaining));
    }
  }

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
