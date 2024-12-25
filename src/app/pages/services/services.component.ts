import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
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
    MatProgressSpinnerModule,
    MatSnackBarModule,
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
      <h5 class="text-center text-muted mb-5">
        Select a service and let us handle the rest with professionalism and
        expertise.
      </h5>

      <div class="col-12 col-md-12">
        <mat-card class="service-selection">
          <mat-card-content>
            <mat-form-field appearance="fill" class="w-100 mt-3">
              <mat-label>Email or Phone</mat-label>
              <input
                matInput
                [(ngModel)]="contact"
                type="email"
                placeholder="Enter your email or phone number"
              />
            </mat-form-field>

            <mat-form-field appearance="fill" class="w-100 mt-3">
              <mat-label>Select Service</mat-label>
              <mat-select [(value)]="selectedService">
                <mat-option *ngFor="let service of services" [value]="service">
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
                [disabled]="isLoading"
              >
                Request Service
              </button>
            </div>

            <!-- Loading Spinner -->
            <div *ngIf="isLoading" class="text-center">
              <mat-spinner diameter="40"></mat-spinner>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <h2 class="text-center mat-h2 mb-5 mt-5" style="color: #2a3d7c;">
        What Our Clients Say
      </h2>

      <!-- Testimonial Section -->
      <mat-card class="testimonial-section mt-2">
        <mat-card-content>
          <div class="testimonial-container">
            <mat-card
              class="testimonial-card"
              *ngFor="let testimonial of visibleTestimonials"
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
                  <p class="testimonial-comment">{{ testimonial.comment }}</p>
                  <p class="testimonial-name">{{ testimonial.name }}</p>
                </div>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      /* Service Section */
      .service-selection {
        margin-top: 10px;
        border-radius: 5px;
        text-align: center;
        height: auto;
        padding: 20px;
      }

      /* Testimonial Section */
      .testimonial-section {
        padding: 20px;
        border-radius: 8px;
      }

      .testimonial-container {
        display: grid;
        gap: 15px;
        padding: 10px;
        grid-template-columns: repeat(1, 1fr); /* Default to 1 card per row */
      }

      .testimonial-card {
        background-color: #f5f5f5;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 15px;
        text-align: center;
        transition: transform 0.3s ease;
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
        border: 3px solid #ff6f00;
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

      /* Mobile Screens (1 testimonial per view) */
      @media (max-width: 767px) {
        .testimonial-container {
          grid-template-columns: repeat(1, 1fr); /* 1 card per row */
        }
      }

      /* Tablet Screens (2 testimonials per row) */
      @media (min-width: 768px) and (max-width: 1024px) {
        .testimonial-container {
          grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
        }
      }

      /* Large Screens (3 testimonials per row) */
      @media (min-width: 1025px) {
        .testimonial-container {
          grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
        }
      }

      /* Spinner styling */
      .mat-spinner {
        margin-top: 20px;
      }

      /* Custom Button */
      .get-started-button {
        background: linear-gradient(135deg, #16a085, #732d91);
        color: white;
        padding: 12px 24px;
        font-size: 12px;
        text-transform: uppercase;
        border: none;
        transition: background-color 0.3s ease-in-out;
      }
    `,
  ],
})
export class ServicesComponent implements OnInit, OnDestroy {
  services = ['Portfolio Services', 'Resume Services', 'Web Services'];
  selectedService: string | undefined;
  userMessage: string = '';
  contact: string = '';
  isLoading = false;

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

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

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
    }, 3000);
  }

  nextTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
    this.visibleTestimonials = this.testimonials.slice(
      this.currentTestimonialIndex,
      this.currentTestimonialIndex + 3
    );
    if (this.visibleTestimonials.length < 3) {
      const remaining = 3 - this.visibleTestimonials.length;
      this.visibleTestimonials.push(...this.testimonials.slice(0, remaining));
    }
  }

  sendRequest() {
    if (!this.selectedService || !this.userMessage || !this.contact) {
      this.snackBar.open(
        'Please fill in all the fields before submitting.',
        'Close',
        { duration: 3000 }
      );
      return;
    }

    this.isLoading = true;

    const requestBody = {
      contact: this.contact,
      service: this.selectedService,
      description: this.userMessage,
    };

    // Check for token in sessionStorage
    const token = sessionStorage.getItem('token');
    if (!token) {
      this.snackBar.open(
        'You are not authenticated. Please log in to continue.',
        'Close',
        {
          duration: 3000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
      this.isLoading = false;
      return;
    }

    // Add the token to the request headers
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make the request with the Authorization header
    this.http
      .post('http://localhost:8080/api/v1/service/request', requestBody, {
        headers,
      })
      .subscribe({
        next: (response: any) => {
          this.isLoading = false;
          const successMessage =
            response?.message || 'Your request has been processed successfully';
          this.snackBar.open(successMessage, 'Close', { duration: 3000 });
          this.resetForm();
        },
        error: (error: any) => {
          this.isLoading = false;
          const errorMessage =
            error?.message || 'Error occurred. Please try again.';
          this.snackBar.open(errorMessage, 'Close', { duration: 3000 });
        },
      });
  }

  resetForm() {
    this.selectedService = undefined;
    this.userMessage = '';
    this.contact = '';
  }
}
