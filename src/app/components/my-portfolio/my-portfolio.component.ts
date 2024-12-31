import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for the button
import { Router, RouterModule } from '@angular/router'; // Import Router for navigation
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule, // Ensure RouterModule is imported
  ], // Add MatButtonModule to imports
  template: `
    <div class="container my-4">
      <!-- Portfolio Header with Improved Styles -->
      <div class="row text-center">
        <div class="col-12">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
            Your Portfolio
          </h2>
          <h5 class="text-muted">
            A collection of your best work—creativity, skill, and dedication at
            the forefront.
          </h5>
        </div>
      </div>

      <!-- Portfolio View Button -->
      <div class="row justify-content-center mb-4 mt-1">
        <mat-card>
          <mat-card-content>
            <div class="col-md-12 text-center">
              <div class="row">
                <h4 class="p-2">Select Your Template</h4>
                <div class="col-md-4">
                  <div
                    class="template-design"
                    (click)="selectTemplate('Template One')"
                    [ngClass]="{
                      selected: selectedTemplate === 'Template One'
                    }"
                  >
                    <h3><b>Pure Glow</b></h3>
                    <p>
                      A theme that captures the gentle, radiant glow of natural
                      light, offering a clean and minimalist aesthetic perfect
                      for any project.
                    </p>
                    <!-- Center the "View Demo" button -->
                    <div class="text-center">
                      <button
                        mat-raised-button
                        color="accent"
                        style="max-width: 140px;"
                      >
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div
                    class="template-design"
                    (click)="selectTemplate('Template Two')"
                    [ngClass]="{
                      selected: selectedTemplate === 'Template Two'
                    }"
                  >
                    <h3><b>Shadow Realm</b></h3>
                    <p>
                      A bold, edgy design with high-contrast black theme and
                      backgrounds.
                    </p>
                    <!-- Center the "View Demo" button -->
                    <div class="text-center">
                      <button
                        mat-raised-button
                        color="accent"
                        style="max-width: 140px;"
                      >
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    class="template-design"
                    (click)="selectTemplate('Template Three')"
                    [ngClass]="{
                      selected: selectedTemplate === 'Template Three'
                    }"
                  >
                    <h3><b>Midnight Eclipse</b></h3>
                    <p>
                      A refined, dark-themed design inspired by the allure of
                      the night sky and the mystery of an eclipse, perfect for
                      modern projects.
                    </p>
                    <!-- Center the "View Demo" button -->
                    <div class="text-center">
                      <button
                        mat-raised-button
                        color="accent"
                        style="max-width: 140px;"
                      >
                        View Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Center the "View My Portfolio" button -->
              <div class="text-center mt-3">
                <button
                  mat-raised-button
                  style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                  (click)="onPortfolioClick()"
                >
                  View My Portfolio
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="row">
        <h2 class="section-title">How Template Works?</h2>
        <mat-card>
          <mat-card-content>
            <div class="col-md-12 p-3">
              <p
                style="font-style: italic; text-align: justify; color: #4A90E2;"
              >
                "Choose the perfect template and launch your professional
                portfolio with ease. Your personalized portfolio is live and
                ready to showcase your skills, experience, and projects in a
                sleek, modern design. Whether you're a developer, designer, or
                entrepreneur, your portfolio will highlight your unique talents
                and leave a lasting impression on clients and employers."
              </p>
              <ul style="list-style-type: none; color: #333;">
                <li>
                  <mat-icon color="primary">verified</mat-icon> Simple and
                  intuitive customization options
                </li>
                <li>
                  <mat-icon color="primary">verified</mat-icon> Responsive and
                  modern design for all devices
                </li>
                <li>
                  <mat-icon color="primary">verified</mat-icon> Impress clients
                  and employers with a professional look
                </li>
              </ul>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="row mt-4">
        <div class="col-md-12 text-center">
          <h2 class="section-title">Any Doubt?</h2>

          <mat-card>
            <mat-card-content>
              <h5>
                Having discussions is something we truly appreciate. We believe
                in the power of dialogue to foster understanding and spark
                creative ideas. It’s an integral part of how we grow and
                connect.
              </h5>
              <a
                mat-raised-button
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                href="/contact"
              >
                Contact Us
              </a>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Center buttons horizontally */
      .text-center {
        text-align: center;
      }

      /* Optional: Add a little margin to the buttons for consistent spacing */
      button {
        margin: 10px 0;
      }

      /* Optional: Customize button width for consistency */
      button.mat-raised-button {
        max-width: 160px; /* Adjust the maximum width if needed */
      }

      /* Global Styles */
      .section-title {
        font-size: 1.5rem;
        text-align: center;
        color: #333;
      }
      /* Ensure the template cards are evenly spaced */
      .row {
        display: flex;
        justify-content: space-between;
        gap: 20px; /* Adds equal spacing between columns */
      }

      .template-design {
        border: 1px solid gray; /* Adds a thin border around the card */
        border-radius: 10px; /* Rounded corners for a smoother look */
        padding: 20px; /* Adds padding inside the card for content spacing */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow effect */
        background-color: #fff; /* White background for the card */
        height: 100%; /* Ensures all cards have equal height */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: box-shadow 0.3s ease; /* Smooth transition for hover effect */
      }

      .template-design h3 {
        margin: 0 0 10px; /* Space between card title and content */
        font-size: 18px; /* Example title font size */
      }

      .template-design p {
        color: #555; /* Darker text for content */
        font-size: 14px; /* Example paragraph font size */
        flex-grow: 1; /* Ensures the paragraph grows to fill remaining space */
      }

      /* Selected state for cards */
      .selected {
        border: 2px solid #16a085; /* Highlight selected card */
        background-color: rgba(22, 160, 133, 0.1); /* Light background color */
      }

      @media (max-width: 768px) {
        .col-md-3 {
          flex: 1 1 100%; /* Stacks the cards on small screens */
        }
      }
    `,
  ],
})
export class MyPortfolioComponent implements OnInit {
  selectedTemplate: string | null = null;

  // This method will be called when a user selects a card (template)
  selectTemplate(templateName: string): void {
    this.selectedTemplate = templateName;
  }
  constructor(private router: Router) {}

  // Button click handler for the "View My Portfolio" button
  onPortfolioClick() {
    // Open portfolio details in a new tab
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/portfolio-details']) // Navigate to the 'portfolio-details' route
    );
    window.open(url, '_blank'); // Open it in a new tab
  }

  // Initialize the chart when the component is loaded
  ngOnInit() {}
}
