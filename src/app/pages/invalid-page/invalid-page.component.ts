import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-invalid-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  template: `
    <div class="container-lg py-5 text-center">
      <div class="row justify-content-center">
        <div
          class="col-12 col-md-8 col-lg-6 card shadow border-0"
          style="border-radius: 12px;"
        >
          <div class="card-body p-4">
            <h4 class="card-title mb-3 text-center">
              <strong>404 ERROR</strong>
            </h4>
            <p class="text-muted mb-4">
              Oops! The page you are looking for does not exist.
            </p>

            <img
              src="../../../assets/404.jpg"
              alt="Oops Image"
              class="img-fluid mb-4"
              style="max-width: 80%; height: auto; object-fit: contain; border-radius: 12px;"
            />

            <button mat-raised-button color="primary" [routerLink]="'/home'">
              Go Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container-lg {
        max-width: 100%;
      }
      .card {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }
      .card-body {
        padding: 2rem;
      }
      .text-muted {
        font-size: 1.2rem;
      }
      @media (max-width: 576px) {
        .card-body {
          padding: 1.5rem;
        }
      }
    `,
  ],
})
export class InvalidPageComponent {}
