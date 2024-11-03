import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="container-lg py-4">
        <div class="card mx-auto" style="max-width: 600px;">
          <div class="card-body">
            <h5 class="card-title mb-4">Personal Information</h5>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputFirstName" class="form-label"
                  >First Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputFirstName"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputLastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputLastName"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputEmail" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="sector 22, Noida, India"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  required
                />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputState"
                  required
                />
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputZip"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputLinkedIn" class="form-label"
                  >LinkedIn Profile</label
                >
                <input
                  type="url"
                  class="form-control"
                  id="inputLinkedIn"
                  placeholder="https://www.linkedin.com/in/username"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PersonalInfoComponent {}
