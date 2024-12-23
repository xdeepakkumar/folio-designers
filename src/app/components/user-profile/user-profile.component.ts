import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
  ],
  template: `
    <div class="container my-5">
      <h2
        class="text-center mat-h2 mb-1"
        style="color: #2a3d7c; font-size: 1.6rem;"
      >
        Profile & Settings
      </h2>
      <h5 class="text-center text-muted mb-4">
        Personalize your experience and update your details to stay connected
        with us.
      </h5>
    </div>

    <div class="container">
      <div class="row g-4">
        <!-- Profile Information -->
        <div class="col-lg-6">
          <mat-card>
            <mat-card-content class="text-center">
              <div class="position-relative">
                <img
                  src="../../../assets/me.png"
                  alt="Profile Image"
                  class="rounded-circle mb-3"
                  style="cursor: pointer; width: 120px; height: 120px; object-fit: cover;cursor: pointer;"
                  (click)="openImageDialog()"
                />
              </div>
              <h5 class="mb-1">Deepak Kumar</h5>
              <p class="text-muted mb-2">+91-9939377229</p>
              <p class="text-muted small">
                {{ 'xdeepakkumar355@gmail.com' }}
              </p>

              <hr class="w-100" />
              <div class="d-flex justify-content-between w-100">
                <span class="text-muted">Profile Status</span>
                <span class="text-success">&#9679;</span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Notification Preferences -->
        <div class="col-lg-6">
          <mat-card>
            <mat-card-content>
              <h6 class="card-title mb-3">Notification Preferences</h6>

              <div class="form-check border-bottom py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="emailNotifications"
                  checked
                />
                <label class="form-check-label" for="emailNotifications">
                  Email Notifications
                </label>
              </div>

              <div class="form-check border-bottom py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="smsNotifications"
                />
                <label class="form-check-label" for="smsNotifications">
                  SMS Notifications
                </label>
              </div>

              <div class="form-check border-bottom py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="pushNotifications"
                />
                <label class="form-check-label" for="pushNotifications">
                  Push Notifications
                </label>
              </div>

              <div class="form-check border-bottom py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="appUpdates"
                />
                <label class="form-check-label" for="appUpdates">
                  App Updates
                </label>
              </div>

              <div class="form-check border-bottom py-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="marketingEmails"
                />
                <label class="form-check-label" for="marketingEmails">
                  Marketing Emails
                </label>
              </div>

              <div class="form-check py-1">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="surveyNotifications"
                />
                <label class="form-check-label" for="surveyNotifications">
                  Survey and Feedback Requests
                </label>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Privacy Settings -->
        <div class="col-lg-6">
          <mat-card>
            <mat-card-content>
              <h6 class="card-title mb-3">Privacy Settings</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <input
                    type="checkbox"
                    id="twoFactor"
                    class="form-check-input me-2"
                  />
                  <label for="twoFactor" class="form-check-label"
                    >Enable Two-Factor Authentication</label
                  >
                </li>
                <li class="list-group-item">
                  <input
                    type="checkbox"
                    id="hideProfile"
                    class="form-check-input me-2"
                  />
                  <label for="hideProfile" class="form-check-label"
                    >Hide Profile from Public</label
                  >
                </li>
              </ul>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Account Security -->
        <div class="col-lg-6">
          <mat-card style="min-height: 140px;">
            <mat-card-content>
              <h6 class="card-title mb-3">Account Security</h6>
              <p class="text-muted small">Last Password Change: 3 months ago</p>
              <button
                mat-raised-button
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                type="submit"
                class="sign-in-button"
              >
                Change Password
              </button>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Subscription Plan -->
        <div class="col-lg-6">
          <mat-card>
            <mat-card-content>
              <h6 class="card-title mb-3">Subscription Plan</h6>
              <p class="mb-1">Current Plan: <strong>Premium</strong></p>
              <p class="text-muted small">Next Billing Date: Jan 15, 2025</p>
              <button
                mat-raised-button
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                type="submit"
                class="sign-in-button"
              >
                Upgrade Plan
              </button>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Language Preferences -->
        <div class="col-lg-6">
          <mat-card style="min-height: 158px;">
            <mat-card-content>
              <h6 class="card-title mb-3">Language Preferences</h6>
              <select class="form-select">
                <option selected>English</option>
                <option>Hindi</option>
              </select>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>

    <!-- Dialog for Viewing/Updating Image -->
    <ng-template #imageDialog>
      <div class="dialog-content">
        <div class="header">
          <h5 class="text-center">Update Your Profile Picture Here</h5>
          <!-- Close Button -->
          <button class="close-btn" style="color: red;" (click)="closeDialog()">
            &#10005;
          </button>
        </div>
        <div class="image-container">
          <img
            *ngIf="selectedImage"
            [src]="selectedImage"
            alt="Profile Image"
            class="img-fluid mb-3"
            style="cursor: pointer; width: 200px; height: 220px; object-fit: cover;"
          />
          <img
            *ngIf="!selectedImage"
            src="../../../assets/me.png"
            alt="Profile Image"
            class="img-fluid mb-3"
            style="cursor: pointer; width: 200px; height: 220px; object-fit: cover;"
          />
        </div>
        <div class="button-container">
          <!-- Upload Button that triggers file input -->
          <button
            *ngIf="!selectedFile"
            mat-raised-button
            (click)="fileInput.click()"
            class="upload-button"
            style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
          >
            Upload
          </button>

          <!-- Hidden file input -->
          <input
            type="file"
            accept="image/*"
            (change)="onFileSelected($event)"
            style="display: none;"
            #fileInput
          />

          <!-- Conditional button to trigger the upload after selecting a file -->
          <button
            *ngIf="selectedFile"
            mat-raised-button
            (click)="uploadNewImage()"
            class="upload-button"
            style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
          >
            Confirm Upload
          </button>
        </div>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .card-body {
        padding: 16px; /* Same as mat-card-body padding */
        background-color: #fff; /* White background, similar to mat-card-body */
        color: rgba(0, 0, 0, 0.87); /* Text color similar to mat-card-body */
        font-family: 'Roboto', sans-serif; /* Default font-family in Material Design */
        font-size: 14px; /* Default font-size similar to mat-card-body */
        display: block; /* Block-level element */
        box-sizing: border-box; /* Ensures padding is included in width/height */
        overflow: hidden; /* Prevents content from overflowing */
      }

      .dialog-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        position: relative; /* To position the close button */
      }

      .header {
        display: flex;
        justify-content: space-between; /* Space between header and close button */
        align-items: center;
        width: 100%;
        padding-bottom: 15px;
      }

      h4.text-center {
        font-size: 0.8rem;
        margin: 0;
        padding: 0 10px; /* Padding around the header text */
        color: #333;
      }

      .close-btn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 5px 5px;
        margin-top: 5px;
        position: absolute; /* Position it in the top-right corner */
        top: 0;
        right: 10px;
      }

      .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        margin-bottom: 20px;
      }

      .upload-button {
        margin-top: 10px;
        padding: 10px 20px;
      }

      h4.text-center {
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: #333; /* Customize header color */
      }
    `,
  ],
})
export class UserProfileComponent {
  @ViewChild('imageDialog') imageDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  openImageDialog(): void {
    const dialogRef = this.dialog.open(this.imageDialog, {
      width: '500px',
      height: '400px',
    });

    // You can add logic here to interact with the dialog if needed
  }

  // Close the dialog
  closeDialog() {
    this.dialog.closeAll(); // This will close all dialogs, including the one opened.
    this.resetFileSelection();
  }

  selectedImage: string | null = null; // Store the selected image URL
  selectedFile: File | null = null; // Store the selected file

  // This function handles the file selection from the file input
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      // Preview the image after selection
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);

      // Store the selected file for uploading
      this.selectedFile = file;
    }
  }

  // Function to upload the new image (you can replace with your upload logic)
  uploadNewImage(): void {
    if (this.selectedFile) {
      // Your upload logic goes here (e.g., make an API call)
      console.log('Uploading file:', this.selectedFile);
      // After upload, you can reset the selected file and image if needed
      this.resetFileSelection();
    }
  }
  // Function to reset the file and image selection
  resetFileSelection(): void {
    this.selectedImage = null; // Clear image preview
    this.selectedFile = null; // Clear selected file
  }
}
