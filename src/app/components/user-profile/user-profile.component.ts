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
    <mat-card>
      <mat-card-content>
        <div class="container my-5">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
            User Profile
          </h2>
          <h5 class="text-center text-muted mb-4">
            Personalize your experience and update your details to stay
            connected with us.
          </h5>
        </div>

        <div class="container my-4" style="max-width: 900px;">
          <div class="row g-4">
            <!-- Profile Information -->

            <div class="col-lg-6">
              <mat-card class="h-100 shadow-sm">
                <mat-card-content class="text-center">
                  <div class="position-relative">
                    <img
                      src="https://via.placeholder.com/120"
                      alt="Profile Image"
                      class="rounded-circle mb-3"
                      style="cursor: pointer;"
                      (click)="openImageDialog()"
                    />
                  </div>
                  <h5 class="mb-1">Sami Rahman</h5>
                  <p class="text-muted mb-2">+1-856-589-995-1236</p>
                  <p class="text-muted small">samirahman0021gmail.com</p>
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
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
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
                  <div class="form-check py-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="newsletterSubscriptions"
                    />
                    <label
                      class="form-check-label"
                      for="newsletterSubscriptions"
                    >
                      Newsletter Subscriptions
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Privacy Settings -->
            <div class="col-lg-6">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
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
                    <li class="list-group-item">
                      <input
                        type="checkbox"
                        id="blockContacts"
                        class="form-check-input me-2"
                      />
                      <label for="blockContacts" class="form-check-label"
                        >Block Unknown Contacts</label
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Account Security -->
            <div class="col-lg-6">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="card-title mb-3">Account Security</h6>
                  <p class="text-muted small">
                    Last Password Change: 3 months ago
                  </p>
                  <button
                    mat-raised-button
                    style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                    type="submit"
                    class="sign-in-button"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            <!-- Subscription Plan -->
            <div class="col-lg-6">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="card-title mb-3">Subscription Plan</h6>
                  <p class="mb-1">Current Plan: <strong>Premium</strong></p>
                  <p class="text-muted small">
                    Next Billing Date: Jan 15, 2025
                  </p>
                  <button
                    mat-raised-button
                    style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                    type="submit"
                    class="sign-in-button"
                  >
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>

            <!-- Language Preferences -->
            <div class="col-lg-6">
              <div class="card h-100 shadow-sm border-0">
                <div class="card-body">
                  <h6 class="card-title mb-3">Language Preferences</h6>
                  <select class="form-select">
                    <option selected>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>

    <!-- Dialog for Viewing/Updating Image -->
    <ng-template #imageDialog>
      <div class="dialog-content">
        <div class="header">
          <h4 class="text-center">Profile Image</h4>
          <!-- Close Button -->
          <button class="close-btn" style="color: red;" (click)="closeDialog()">
            &#10005;
          </button>
        </div>
        <div class="image-container">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile Image"
            class="img-fluid mb-3"
          />
        </div>
        <div class="button-container">
          <button
            mat-raised-button
            (click)="uploadNewImage()"
            class="upload-button"
            style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
          >
            Upload New Image
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
      width: '400px',
      height: '300px',
    });

    // You can add logic here to interact with the dialog if needed
  }

  uploadNewImage() {
    console.log('Upload new image');
    // Logic to handle image upload
  }

  // Close the dialog
  closeDialog() {
    this.dialog.closeAll(); // This will close all dialogs, including the one opened.
  }
}
