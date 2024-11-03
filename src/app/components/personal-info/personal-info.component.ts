import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-lg py-5">
      <div
        class="card mx-auto shadow-lg border-0"
        style="max-width: 650px; border-radius: 12px;"
      >
        <div class="card-body p-4">
          <h4 class="card-title mb-4 text-center text-primary">
            Personal Information
          </h4>
          <hr />
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputFirstName" class="form-label fw-semibold"
                >First Name</label
              >
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputFirstName"
                placeholder="John"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputLastName" class="form-label fw-semibold"
                >Last Name</label
              >
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputLastName"
                placeholder="Doe"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputEmail" class="form-label fw-semibold"
                >Email</label
              >
              <input
                type="email"
                class="form-control border-secondary-subtle"
                id="inputEmail"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label fw-semibold"
                >Address</label
              >
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputAddress"
                placeholder="Sector 22, Noida, India"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label fw-semibold">City</label>
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputCity"
                placeholder="Noida"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label fw-semibold"
                >State</label
              >
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputState"
                placeholder="Uttar Pradesh"
                required
              />
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label fw-semibold">Zip</label>
              <input
                type="text"
                class="form-control border-secondary-subtle"
                id="inputZip"
                placeholder="201301"
                required
              />
            </div>
            <div class="col-12">
              <label for="inputLinkedIn" class="form-label fw-semibold"
                >LinkedIn Profile</label
              >
              <input
                type="url"
                class="form-control border-secondary-subtle"
                id="inputLinkedIn"
                placeholder="https://www.linkedin.com/in/username"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
      }

      .card-title {
        font-weight: 600;
      }

      .form-label {
        font-weight: 500;
        color: #495057;
      }

      input[type='text'],
      input[type='email'],
      input[type='url'],
      input[type='number'],
      select,
      textarea {
        border-radius: 6px;
      }
    `,
  ],
})
export class PersonalInfoComponent {}
