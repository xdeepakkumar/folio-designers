import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container-lg py-5">
      <h2 class="text-center mb-4">Profile Preview</h2>

      <!-- Personal Info Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Personal Info</h5>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doeexample.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 1234 Main Street, Springfield, IL</p>
          <p>
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/johndoe" target="_blank"
              >linkedin.com/in/johndoe</a
            >
          </p>
          <p>
            <strong>Website:</strong>
            <a href="https://johndoe.com" target="_blank">johndoe.com</a>
          </p>
        </div>
      </div>

      <!-- Education and Certification Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Education & Certifications</h5>
          <div *ngFor="let education of educations; let i = index">
            <p>
              <strong>Degree {{ i + 1 }}:</strong> {{ education.degree }}
            </p>
            <p><strong>Institution:</strong> {{ education.institution }}</p>
            <p>
              <strong>Graduation Year:</strong> {{ education.graduationYear }}
            </p>
            <p><strong>Grade:</strong> {{ education.grade }}</p>
          </div>
          <div *ngFor="let certification of certifications; let i = index">
            <p>
              <strong>Certification {{ i + 1 }}:</strong>
              {{ certification.certificationName }}
            </p>
            <p>
              <strong>Issued By:</strong>
              {{ certification.issuingOrganization }}
            </p>
            <p><strong>Date Issued:</strong> {{ certification.dateIssued }}</p>
            <p>
              <strong>Expiration Date:</strong>
              {{ certification.expirationDate || 'N/A' }}
            </p>
            <p>
              <strong>Description:</strong>
              {{ certification.certificationDescription }}
            </p>
          </div>
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

      <!-- Projects Card -->
      <div class="card mb-4 shadow-lg border-0" style="border-radius: 12px;">
        <div class="card-body">
          <h5 class="card-title text-secondary">Projects</h5>
          <div *ngFor="let project of projects; let i = index">
            <p>
              <strong>Project {{ i + 1 }} Name:</strong>
              {{ project.projectName }}
            </p>
            <p><strong>Description:</strong> {{ project.description }}</p>
            <p>
              <strong>Technologies Used:</strong> {{ project.technologiesUsed }}
            </p>
            <p><strong>Role:</strong> {{ project.role }}</p>
            <p>
              <strong>GitHub Repo:</strong>
              <a [href]="project.githubRepo" target="_blank">{{
                project.githubRepo
              }}</a>
            </p>
            <p>
              <strong>Live URL:</strong>
              <a [href]="project.liveUrl" target="_blank">{{
                project.liveUrl
              }}</a>
            </p>
          </div>
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
      a {
        text-decoration: none;
        color: #007bff;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class PerviewComponent {
  // Example data for preview (you can replace this with real data if needed)
  educations = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Harvard University',
      graduationYear: 2020,
      grade: 'A',
    },
    {
      degree: 'M.Tech in Software Engineering',
      institution: 'MIT',
      graduationYear: 2022,
      grade: 'A+',
    },
  ];

  certifications = [
    {
      certificationName: 'AWS Certified Solutions Architect',
      issuingOrganization: 'Amazon Web Services',
      dateIssued: '2021-05-12',
      expirationDate: '2023-05-12',
      certificationDescription: 'Certified Solutions Architect for AWS Cloud.',
    },
    {
      certificationName: 'Google Analytics Certification',
      issuingOrganization: 'Google',
      dateIssued: '2022-03-20',
      expirationDate: '',
      certificationDescription: 'Certified in using Google Analytics tools.',
    },
  ];

  projects = [
    {
      projectName: 'Personal Portfolio Website',
      description:
        'A personal portfolio website showcasing my projects and skills.',
      technologiesUsed: 'HTML, CSS, JavaScript, Angular',
      role: 'Frontend Developer',
      githubRepo: 'https://github.com/johndoe/portfolio',
      liveUrl: 'https://johndoe.com/portfolio',
    },
    {
      projectName: 'E-Commerce Website',
      description: 'An e-commerce platform built using Angular and Firebase.',
      technologiesUsed: 'Angular, Firebase, TypeScript',
      role: 'Full Stack Developer',
      githubRepo: 'https://github.com/johndoe/e-commerce',
      liveUrl: 'https://ecommerce.com',
    },
  ];

  // Personal Info - Example data
  personalInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    address: '1234 Main Street, Springfield, IL',
    linkedin: 'https://linkedin.com/in/johndoe',
    website: 'https://johndoe.com',
  };

  // Additional Info - Example data
  additionalInfo = {
    template: 'Template 1',
    sliderEnabled: 'Yes',
    resumeUploaded: 'Yes',
    profileLive: 'No',
  };
}
