import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-details',
  template: `
    <div class="container mt-5">
      <h2>Portfolio Details</h2>
      <p>
        Welcome to the portfolio details page. This page provides an in-depth
        view of my portfolio, including all of my work and achievements.
      </p>
    </div>
  `,
  styles: [
    `
      h2 {
        color: #2a3d7c;
      }
      p {
        color: #555;
      }
    `,
  ],
})
export class PortfolioDetailsComponent {}
