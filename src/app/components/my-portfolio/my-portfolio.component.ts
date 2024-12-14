import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for the button
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-my-portfolio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], // Add MatButtonModule to imports
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container my-5">
          <!-- Portfolio Header with Improved Styles -->
          <div class="row text-center">
            <div class="col-12">
              <h2 style="color: #2a3d7c; font-size: 2rem; font-weight: bold;">
                Your Portfolio
              </h2>
              <h5 class="text-muted">
                A collection of my best work—creativity, skill, and dedication
                at the forefront. Let’s collaborate and create something great!
              </h5>
            </div>
          </div>

          <!-- Portfolio View Button -->
          <div class="row justify-content-center mb-4">
            <div class="col-auto">
              <button
                mat-raised-button
                style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                (click)="onPortfolioClick()"
              >
                View My Portfolio
              </button>
            </div>
          </div>

          <!-- Profile Visitors Insights Chart Section -->
          <div class="row justify-content-center pt-3">
            <div class="col-12 col-md-11">
              <h4
                class="text-center mb-3"
                style="color: #333; font-weight: 600;"
              >
                Profile Visitors Insights (Last 6 Months)
              </h4>
              <canvas id="portfolioChart" width="400" height="200"></canvas>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .portfolio-stats {
        display: flex;
        justify-content: center;
        padding: 20px 0;
      }

      canvas {
        border-radius: 8px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class MyPortfolioComponent implements OnInit {
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
  ngOnInit() {
    // Register all chart components
    Chart.register(...registerables);

    this.initializeChart();
  }

  // Initialize Chart.js
  initializeChart() {
    const ctx = document.getElementById('portfolioChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'line', // Line chart to represent visitor data over time
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Last 6 months
          datasets: [
            {
              label: 'Profile Visitors',
              data: [120, 150, 180, 160, 190, 250], // Simulated data for the past 6 months
              borderColor: 'rgba(75, 192, 192, 1)', // Line color
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Line fill color
              fill: true, // Fill the area under the line
              tension: 0.4, // Smooth curve
              borderWidth: 2, // Border width for the line
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Months', // X-axis label
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Visitors', // Y-axis label
              },
            },
          },
          plugins: {
            legend: {
              position: 'top', // Legend at the top
            },
          },
        },
      });
    }
  }
}
