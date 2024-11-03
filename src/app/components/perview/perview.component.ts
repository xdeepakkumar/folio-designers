import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-lg py-5">
      <h2 class="text-center mb-4 text-primary">Profile Preview</h2>

      <!-- Personal Info Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Personal Info</h5>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
        </div>
      </div>

      <!-- Education and Certification Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Education & Certifications</h5>
          <p><strong>Degree:</strong> B.Sc. in Computer Science</p>
          <p><strong>Institution:</strong> Harvard University</p>
          <p><strong>Graduation Year:</strong> 2020</p>
          <p>
            <strong>Certification:</strong> AWS Certified Solutions Architect
          </p>
        </div>
      </div>

      <!-- Skills and Experience Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Skills & Experience</h5>
          <p><strong>Role:</strong> Frontend Developer</p>
          <p><strong>Years of Experience:</strong> 3 years</p>
          <p><strong>Skills:</strong> Angular, React, JavaScript</p>
        </div>
      </div>

      <!-- Additional Info Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Additional Information</h5>
          <p><strong>Selected Template:</strong> Template 1</p>
          <p><strong>Slider Enabled:</strong> Yes</p>
          <p><strong>Resume Uploaded:</strong> Yes</p>
          <p><strong>Profile Live:</strong> No</p>
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
        border-radius: 12px;
      }
      .card-title {
        font-size: 1.25rem;
        font-weight: 600;
      }
    `,
  ],
})
export class PerviewComponent {}
