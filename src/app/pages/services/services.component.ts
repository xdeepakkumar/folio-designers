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
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatIconModule } from '@angular/material/icon';

// Define an interface for the service object
interface Service {
  id: string;
  service: string;
  description: string;
  statusMessage: string;
  issueResolved: boolean;
}

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
    MatTableModule,
    MatIconModule,
  ],
  template: `
    <div class="container my-4">
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

      <div class="row">
        <div class="col-md-12">
          <mat-card class="mat-elevation-z4">
            <mat-card-content>
              <h5 class="text-justify mb-4" style="line-height: 1.8;">
                <i>
                  Discover a range of services crafted to empower you and your
                  business. From professional portfolio creation to cutting-edge
                  web development, insightful consulting, and dependable ongoing
                  support, we ensure your success with tailored solutions.
                </i>
              </h5>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="d-flex align-items-start">
                    <div class="me-3">
                      <mat-icon class="text-primary">work</mat-icon>
                    </div>
                    <div>
                      <h5 class="mb-1"><b>PORTFOLIO CREATION</b></h5>
                      <p class="text-justify mb-0" style="font-size: 0.9rem;">
                        Showcase your achievements and skills with a
                        custom-built, professional portfolio.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex align-items-start">
                    <div class="me-3">
                      <mat-icon class="text-success">code</mat-icon>
                    </div>
                    <div>
                      <h5 class="mb-1"><b>WEB DEVELOPMENT</b></h5>
                      <p class="text-justify mb-0" style="font-size: 0.9rem;">
                        Build responsive, user-friendly websites to create a
                        lasting online presence.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex align-items-start">
                    <div class="me-3">
                      <mat-icon class="text-warning"
                        >lightbulb_outline</mat-icon
                      >
                    </div>
                    <div>
                      <h5 class="mb-1"><b>CONSULTING</b></h5>
                      <p class="text-justify mb-0" style="font-size: 0.9rem;">
                        Get expert advice and tailored business solutions to
                        optimize your operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex align-items-start">
                    <div class="me-3">
                      <mat-icon class="text-danger">build</mat-icon>
                    </div>
                    <div>
                      <h5 class="mb-1"><b>ONGOING SUPPORT </b></h5>
                      <p class="text-justify mb-0" style="font-size: 0.9rem;">
                        Enjoy continuous updates and maintenance for
                        uninterrupted system performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <h2 class="section-title">Service Enrollment</h2>

      <div class="row">
        <div class="col-md-7">
          <mat-card style="min-height: 450px;">
            <p class="gradient-text">Your Requested services</p>

            <mat-card-content>
              <!-- Table Container with Bootstrap classes for styling -->
              <div class="table-responsive" *ngIf="isLoggedIn">
                <table
                  class="table table-striped table-bordered"
                  *ngIf="servicesList.length > 0; else noData"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Service</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let service of servicesList; let i = index">
                      <td>{{ i + 1 }}</td>
                      <td>{{ service.service }}</td>
                      <td>{{ service.description }}</td>
                      <td>{{ service.statusMessage }}</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          (click)="updateService(service.id)"
                          aria-label="Update Service"
                        >
                          <i class="fa fa-pencil"></i>
                        </button>
                        <button
                          class="btn btn-danger btn-sm action-buttons"
                          (click)="deleteService(service.id)"
                          aria-label="Delete Service"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Template for "No data" message -->
                <ng-template #noData>
                  <div
                    style="text-align: center; padding: 20px; margin-top:15%"
                  >
                    <span style="font-weight: 600;">
                      <mat-icon style="color: #007bff; font-size: 32px"
                        >search_off</mat-icon
                      >
                    </span>
                    <p
                      style="margin-top: 20px; font-size: 18px; font-weight: 600;"
                    >
                      No request found.
                    </p>
                  </div>
                </ng-template>
              </div>

              <!-- Optional: Show a message if the user is not logged in -->
              <div
                *ngIf="!isLoggedIn"
                style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;"
              >
                <mat-icon style="color: #007bff;">lock</mat-icon>

                <p style="margin-top: 20px; font-size: 18px; font-weight: 600;">
                  Please log in to view your requested services.
                </p>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <div class="col-md-5">
          <mat-card>
            <p class="gradient-text">Request new service</p>

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
                  rows="3"
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
      </div>

      <div class="row">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="col-md-6">
          <mat-card class="testimonial-card">
            <mat-card-content>
              <div class="testimonial">
                <div class="testimonial-avatar">
                  <img
                    src="../../../assets/me.png"
                    alt="Client 1"
                    class="avatar"
                  />
                </div>
                <div class="testimonial-text">
                  <p class="testimonial-quote">
                    "This company exceeded my expectations. Their services
                    helped me take my business to the next level. recommend!"
                  </p>
                  <p class="testimonial-name">John Doe</p>
                  <p class="testimonial-role">CEO, Company ABC</p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <div class="col-md-6">
          <mat-card class="testimonial-card">
            <mat-card-content>
              <div class="testimonial">
                <div class="testimonial-avatar">
                  <img
                    src="../.././../assets/assets/images/av.png"
                    alt="Client 2"
                    class="avatar"
                  />
                </div>
                <div class="testimonial-text">
                  <p class="testimonial-quote">
                    "The team was fantastic to work with. They understood our
                    needs and delivered exceptional results!"
                  </p>
                  <p class="testimonial-name">Jane Smith</p>
                  <p class="testimonial-role">Marketing Director, XYZ Corp</p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .action-buttons {
        margin-left: 10px; /* Adjust this value as needed */
      }

      .section-title {
        text-align: center;
        font-size: 2rem;
        color: #333;
        margin-bottom: 30px;
      }

      .testimonial-card {
        margin-bottom: 20px;
        border-radius: 8px;
        padding: 20px;
      }

      .testimonial {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .testimonial-avatar {
        margin-right: 20px;
      }

      .avatar {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        object-fit: cover;
      }

      .testimonial-text {
        max-width: 80%;
      }

      .testimonial-quote {
        font-style: italic;
        color: #555;
        margin-bottom: 10px;
      }

      .testimonial-name {
        font-weight: bold;
        color: #333;
      }

      .testimonial-role {
        color: #777;
        font-size: 0.9rem;
      }

      .gradient-text {
        text-align: center;
        padding: 10px;
        text-transform: uppercase;
        font-weight: bold; /* Optional, to make the text bolder */

        /* Apply the gradient to the text */
        background: linear-gradient(135deg, #16a085, #732d91);
        -webkit-background-clip: text; /* Ensures the gradient is clipped to the text */
        color: transparent; /* Makes the text color transparent to show the background gradient */
      }

      /* Global Styles */
      .section-title {
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 20px;
        color: #333;
        margin: 20px;
      }
      .service-card {
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .service-title {
        font-size: 1.2rem;
        font-weight: bold;
        color: #4a90e2;
        text-align: center;
      }

      .service-description {
        font-size: 0.8rem;
        color: #333;
        line-height: 1.7;
        margin-bottom: 15px;
      }

      .service-list {
        font-size: 0.7rem;
        color: #555;
        line-height: 1.5;
        margin-left: 20px;
      }

      .service-list li {
        margin-bottom: 10px;
      }

      .service-list strong {
        color: #16a085;
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
export class ServicesComponent implements OnInit {
  services = ['Portfolio Services', 'Resume Services', 'Web Services'];
  selectedService: string | undefined;
  userMessage: string = '';
  contact: string = '';
  userId: string = '';
  isLoading = false;
  isLoggedIn: boolean = false;
  // Step 3: Initialize an array to store services
  servicesList: Service[] = [];

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('token') !== null;
    this.getUserServiceList();
  }

  sendRequest() {
    if (!this.selectedService || !this.userMessage || !this.contact) {
      this.snackBar.open(
        'Please fill in all the fields before submitting.',
        'Close',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' }
      );
      return;
    }

    this.isLoading = true;

    // Check for token in sessionStorage
    const token = sessionStorage.getItem('token');
    const userInfo = sessionStorage.getItem('userinfo') || '';
    if (!token) {
      this.snackBar.open('Please log in to continue.', 'Close', {
        duration: 3000, // Snackbar duration
        verticalPosition: 'top', // Snackbar position
        horizontalPosition: 'right', // Snackbar position
      });
      this.isLoading = false;
      return;
    }

    const parsedUserInfo = JSON.parse(userInfo);
    const userId = parsedUserInfo.response[0].userId;

    const requestBody = {
      userId: userId,
      contact: this.contact,
      service: this.selectedService,
      description: this.userMessage,
    };

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
          this.snackBar.open(successMessage, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          this.resetForm();
        },
        error: (error: any) => {
          this.isLoading = false;
          const errorMessage =
            error?.message || 'Error occurred. Please try again.';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000,
            verticalPosition: 'top', // Snackbar position
            horizontalPosition: 'right',
          });
        },
      });
    window.location.reload();
  }

  resetForm() {
    this.selectedService = undefined;
    this.userMessage = '';
    this.contact = '';
  }

  // Columns to display in the table
  displayedColumns: string[] = [
    'id',
    'service',
    'description',
    'status',
    'actions',
  ];

  // Update Service method (just an example)
  updateService(serviceId: any): void {
    console.log('Update service with ID:', serviceId);
    // Implement the update logic here
  }

  // delete
  deleteService(serviceId: any): void {
    // Ask for confirmation using the browser's built-in confirm dialog
    const confirmed = window.confirm(
      'Are you sure you want to delete this service?'
    );

    if (confirmed) {
      // If the user confirmed, proceed with deletion
      this.confirmDelete(serviceId);
    }
  }

  /**
   * delete Data
   * @param serviceId
   */
  confirmDelete(serviceId: any): void {
    const token = sessionStorage.getItem('token');

    if (token) {
      // Make the DELETE request to the API
      this.http
        .delete(`http://localhost:8080/api/v1/service/delete/${serviceId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token for authentication
            'Content-Type': 'application/json',
          },
        })
        .subscribe(
          (response: any) => {
            // Handle successful deletion
            if (
              response &&
              response.message === 'Request processed successfully.'
            ) {
              // Remove the deleted service from the services list
              this.servicesList = this.servicesList.filter(
                (service) => service.id !== serviceId
              );
              alert('Service deleted successfully'); // Alert the user that the service has been deleted
            } else {
              console.error('Failed to delete service:', response.message);
              alert('Failed to delete service. Please try again.'); // Alert on failure
            }
          },
          (error) => {
            // Handle error in case of failure
            console.error('Error deleting service:', error);
            alert('Failed to delete service. Please try again.'); // Alert on error
          }
        );
    } else {
      // Handle missing token case
      console.error('No token found in sessionStorage');
      alert('User is not authenticated'); // Alert if the user is not authenticated
    }
  }

  // Method to fetch services
  getUserServiceList() {
    if (this.isLoggedIn) {
      const token = sessionStorage.getItem('token');
      const userInfo = sessionStorage.getItem('userinfo') || '';
      const parsedUserInfo = JSON.parse(userInfo);
      const userId = parsedUserInfo.response[0].userId;

      if (token && userId) {
        fetch(`http://localhost:8080/api/v1/service/get/${userId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Authorization header with token
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json()) // Parse the response as JSON
          .then((data) => {
            if (data && data.response) {
              // Add each service object from the response to the services list
              data.response.forEach((service: Service) => {
                return this.servicesList.push({
                  id: service.id,
                  service: service.service,
                  description: service.description,
                  statusMessage: service.statusMessage,
                  issueResolved: service.issueResolved,
                });
              });
            } else {
              console.error(
                'No services found or error in response:',
                data.message
              );
            }
          })
          .catch((error) => {
            console.error('Error fetching services:', error);
          });
      } else {
        console.error('Token or User ID is missing from session storage');
      }
    } else {
      console.error('User is not logged in');
    }
  }
}
