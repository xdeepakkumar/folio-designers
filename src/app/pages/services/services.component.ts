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
    <mat-card class="main-card">
      <mat-card-content>
        <div class="container my-5">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
            Our Premium Services
          </h2>
          <h5 class="text-center text-muted mb-5">
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
                    <mat-label>Address</mat-label>
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
                      rows="5"
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

            <!-- Image Section -->
            <div class="col-12 col-md-6 image-container">
              <img
                src="../../../assets/assets/images/services.jpg"
                alt="Tech Image"
                class="img-fluid rounded-img"
              />
            </div>
          </div>

          <!-- Testimonial Section
          <mat-card class="testimonial-section mt-5">
            <mat-card-content>
              <h2 class="text-center mat-h2 mb-4" style="color: #2a3d7c;">
                What Our Clients Say
              </h2>
              <div class="testimonial-slider">
                <div class="testimonial-container">
                  <mat-card
                    class="testimonial-card"
                    *ngFor="
                      let testimonial of visibleTestimonials;
                      let i = index
                    "
                  >
                    <mat-card-content>
                      <div class="testimonial-image-container">
                        <img
                          [src]="testimonial.image"
                          alt="{{ testimonial.name }}"
                          class="testimonial-image"
                        />
                      </div>
                      <div class="testimonial-text">
                        <p class="testimonial-comment">
                          {{ testimonial.comment }}
                        </p>
                        <p class="testimonial-name">{{ testimonial.name }}</p>
                      </div>
                    </mat-card-content>
                  </mat-card>
                </div>
              </div>
            </mat-card-content>
          </mat-card> -->
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      /* Define the gradient as a reusable variable */
      :root {
        --primary-gradient: linear-gradient(
          135deg,
          #16a085,
          #732d91
        ); /* Teal to Purple */
      }

      /* Define the gradient as a reusable variable */
      :root {
        --primary-gradient: linear-gradient(
          135deg,
          #16a085,
          #732d91
        ); /* Teal to Purple */
      }

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

      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        padding: 10px;
        overflow: hidden;
        border-radius: 12px;
      }

      .image-container img {
        max-width: 99%;
        height: 70% !important;
        object-fit: cover;
        border-radius: 5px;
      }

      .testimonial-section {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .testimonial-slider {
        display: flex;
        overflow: hidden;
        width: 100%;
        margin: 20px 0;
        position: relative;
      }

      .testimonial-container {
        display: flex;
        transition: transform 0.5s ease;
        width: 300%;
      }

      .testimonial-card {
        width: 33.33%;
        margin-right: 15px;
        background-color: #f5f5f5;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 15px;
        text-align: center;
        transition: transform 0.3s ease;
      }

      .testimonial-card:last-child {
        margin-right: 0;
      }

      .testimonial-image-container {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
      }

      .testimonial-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #ff6f00; /* Amber border for the image */
      }

      .testimonial-text {
        padding: 10px;
      }

      .testimonial-comment {
        font-size: 1rem;
        color: #555;
        margin-bottom: 10px;
      }

      .testimonial-name {
        font-weight: bold;
        color: #2a3d7c;
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
