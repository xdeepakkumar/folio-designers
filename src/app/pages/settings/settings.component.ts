import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container my-4">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #ff5733; font-size: 2.1em;"
          >
            User Settings
          </h2>
          <h5 class="text-center text-muted mb-4">
            Adjust to suit your preferences.
          </h5>
          <div class="row">
            <div class="col-md-6 mb-4" *ngFor="let setting of settingsList">
              <mat-card class="setting-item">
                <mat-card-header>
                  <mat-card-title>{{ setting.title }}</mat-card-title>
                </mat-card-header>
                <mat-card-content>
                  <p>{{ setting.description }}</p>
                </mat-card-content>
                <mat-card-actions>
                  <button
                    mat-raised-button
                    color="primary"
                    class="small-raised-button"
                  >
                    {{ setting.action }}
                  </button>
                </mat-card-actions>
              </mat-card>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .setting-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .setting-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      mat-card-title {
        font-size: 1rem;
      }

      mat-card-content p {
        color: #555;
      }
      .small-raised-button {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class SettingsComponent {
  settingsList = [
    {
      title: 'Profile Information',
      description:
        'Update your profile details like name, email, and contact information.',
      action: 'Edit Profile',
    },
    {
      title: 'Notification Preferences',
      description:
        'Manage your notifications settings to stay updated with the latest news.',
      action: 'Manage Notifications',
    },
    {
      title: 'Privacy Settings',
      description:
        'Adjust your privacy preferences for a more secure experience.',
      action: 'Edit Privacy Settings',
    },
    {
      title: 'Account Security',
      description: 'Change your password and enable two-factor authentication.',
      action: 'Update Security',
    },
    {
      title: 'Subscription Plan',
      description:
        'Review or upgrade your current subscription to access premium features.',
      action: 'Manage Subscription',
    },
    {
      title: 'Language Preferences',
      description:
        'Select your preferred language for the best user experience.',
      action: 'Change Language',
    },
  ];
}
