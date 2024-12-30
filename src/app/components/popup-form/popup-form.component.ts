import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-popup-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="popup-form">
      <div class="popup-header">
        <button mat-icon-button (click)="closeDialog()" class="close-btn">
          <mat-icon class="close-icon">close</mat-icon>
        </button>
      </div>

      <form
        [formGroup]="serviceForm"
        (ngSubmit)="onSubmit()"
        class="form-container"
      >
        <div class="form-group">
          <mat-form-field appearance="fill" class="form-field">
            <mat-label>Service</mat-label>
            <mat-select
              id="service"
              formControlName="service"
              class="form-input"
            >
              <mat-option value="Portfolio Services"
                >Portfolio Services</mat-option
              >
              <mat-option value="Resume Services">Resume Services</mat-option>
              <mat-option value="Web Services">Web Services</mat-option>
            </mat-select>
            <mat-error
              *ngIf="
                serviceForm.get('service')?.invalid &&
                serviceForm.get('service')?.touched
              "
            >
              Service is required
            </mat-error>
          </mat-form-field>
        </div>

        <div class="form-group">
          <mat-form-field appearance="fill" class="form-field">
            <mat-label>Description</mat-label>
            <textarea
              matInput
              id="description"
              formControlName="description"
              class="form-textarea"
            ></textarea>
            <mat-error
              *ngIf="
                serviceForm.get('description')?.invalid &&
                serviceForm.get('description')?.touched
              "
            >
              Description is required
            </mat-error>
          </mat-form-field>
        </div>

        <button
          mat-raised-button
          type="submit"
          class="submit-btn"
          [disabled]="serviceForm.invalid"
          style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
        >
          Update
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      /* Ensure the text and icon are aligned horizontally */
      .popup-header {
        display: flex;
        align-items: center;
        justify-content: space-between; /* Optional: Adjust if you need space between text and icon */
      }

      .close-icon {
        color: red; /* Make the close icon red */
      }

      /* Popup form container */
      .popup-form {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        box-sizing: border-box; /* Ensure padding is included in width */
      }

      .form-field {
        width: 100%;
      }

      /* Optionally, style the dialog body */
      .popup-body {
        padding: 16px;
        font-size: 16px;
        color: #555;
      }

      /* Form container */
      .form-container {
        display: flex;
        flex-direction: column;
      }

      /* Submit button styling */
      .submit-btn {
        width: 100%;
        padding: 12px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .submit-btn:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      .submit-btn:not(:disabled):hover {
        background-color: #218838;
      }

      /* Error styling */
      mat-error {
        color: #d9534f;
        font-size: 12px;
      }

      /* popup-form.component.css */
      .popup-header {
        position: relative;
        padding: 10px;
        display: flex;
        justify-content: flex-end;
      }

      button.mat-icon-button {
        background: none;
        border: none;
        cursor: pointer;
      }
    `,
  ],
})
export class PopupFormComponent implements OnInit {
  serviceForm: FormGroup;
  @Input() serviceId: string = '';

  // Inject dependencies
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  // API URLs
  private getServiceUrl = 'http://localhost:8080/api/v1/service/get/';
  private requestUrl = 'http://localhost:8080/api/v1/service/request';
  token = sessionStorage.getItem('token');
  userInfo = sessionStorage.getItem('userinfo') || '';
  parsedUserInfo = JSON.parse(this.userInfo);
  userId = this.parsedUserInfo.response[0].userId;
  email = this.parsedUserInfo.response[0].email;

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<PopupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.serviceId = data.serviceId; // Extract serviceId from dialog data

    // Initialize form with default empty values or validators
    this.serviceForm = this.fb.group({
      service: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.updateService(this.serviceId);
  }

  // Fetch service data by ID
  updateService(serviceId: string): void {
    this.serviceId = serviceId;
    this.getServiceById(serviceId).subscribe((serviceData) => {
      console.log('Fetched service data:', serviceData);

      // Extract the first element of the response array, which contains the actual service data
      const service = serviceData.response[0];

      // Populate the form with the fetched data
      this.serviceForm.patchValue({
        service: service.service, // Set the 'service' field
        description: service.description, // Set the 'description' field
      });
    });
  }

  // Method to get service data by ID
  getServiceById(serviceId: string): Observable<any> {
    // Add the token to the request headers
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };

    return this.http.get<any>(`${this.getServiceUrl}${serviceId}`, { headers });
  }

  // Handle the form submission (Save the updated data)
  onSubmit(): void {
    if (this.serviceForm.valid) {
      const updatedData = {
        id: this.serviceId, // Include the service ID to update the specific record
        ...this.serviceForm.value, // Spread the form data
        userId: this.userId,
        contact: this.email,
        // Assuming this is static for now, or you can fetch dynamically
      };
      this.updateServiceData(updatedData).subscribe((response) => {
        this.snackBar.open(response.message, 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
        this.closeDialog();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }
  }

  // Method to send updated data to the backend (POST request)
  updateServiceData(updatedData: any): Observable<any> {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return this.http.post<any>(this.requestUrl, updatedData, { headers });
  }

  closeDialog(): void {
    this.dialogRef.close(); // Close the dialog when the button is clicked
  }
}
