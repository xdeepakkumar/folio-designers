import { RouterLink, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to Our Portfolio Platform</h1>
        <h4 style="color: #000;" class="text-muted">
          Showcase your skills and achievements with a portfolio that stands
          out.
        </h4>
        <a
          mat-raised-button
          color="primary"
          class="get-started-button"
          [routerLink]="'/create-portfolio'"
        >
          Get Started
        </a>
      </div>
    </section>

    <section class="testimonials-section">
      <h2 class="section-title">Who We Are</h2>
      <p class="section-description">
        We specialize in creating professional portfolios that make an impact.
        Our mission is to provide high-quality services that help you present
        your best self.
      </p>
    </section>

    <section class="services-section">
      <h2 class="section-title">Our Services</h2>
      <div class="service-cards">
        <mat-card class="service-card" *ngFor="let service of services">
          <mat-card-header>
            <mat-icon>check_circle</mat-icon>
            <mat-card-title>{{ service.title }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>{{ service.description }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>

    <section class="testimonials-section">
      <h2 class="section-title">Testimonials</h2>
      <div class="testimonial-cards">
        <mat-card
          class="testimonial-card"
          *ngFor="let testimonial of testimonials"
        >
          <mat-card-content>
            <p class="quote">"{{ testimonial.message }}"</p>
            <p class="author">- {{ testimonial.author }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to Start?</h2>
      <p>Create a professional portfolio in minutes.</p>
      <button mat-raised-button color="accent" class="cta-button">
        Create Your Portfolio
      </button>
    </section>
  `,
  styles: [
    `
      /* Hero Section */
      .hero-section {
        position: relative;
        background: url('/assets/hero-bg.jpg') no-repeat center center / cover;
        color: #fff;
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
      }
      .hero-content h1 {
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 2%;
        color: #000;
      }

      /* General Section Styling */
      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .section-description {
        text-align: center;
        font-size: 1.2rem;
        max-width: 800px;
        margin: 0 auto 40px;
      }

      /* Services Section */
      .services-section {
        padding: 40px 20px;
        background-color: #f9f9f9;
      }
      .service-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .service-card {
        width: 300px;
        margin: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }
      .service-card:hover {
        transform: translateY(-5px);
      }

      /* Testimonials Section */
      .testimonials-section {
        padding: 40px 20px;
        background-color: #f0f0f0;
        text-align: center;
      }
      .testimonial-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .testimonial-card {
        max-width: 350px;
        margin: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      .quote {
        font-style: italic;
        font-size: 1.1rem;
        margin-bottom: 15px;
      }
      .author {
        font-weight: bold;
        font-size: 1rem;
      }

      /* Call to Action Section */
      .cta-section {
        background-color: #673ab7;
        color: white;
        text-align: center;
        padding: 40px 20px;
        margin-top: 40px;
      }
      .cta-button {
        font-size: 1.2rem;
        padding: 15px 30px;
        border-radius: 30px;
        background-color: #fff;
        color: #673ab7;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;
      }
      .cta-button:hover {
        background-color: #388e3c;
        color: white;
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .hero-section {
          height: 60vh; /* Reduce height for smaller screens */
        }

        .hero-content h1 {
          font-size: 2.2rem; /* Adjust font size */
          margin-bottom: 1%;
        }

        .hero-content h4 {
          font-size: 1rem;
          margin-top: 10px;
        }

        .get-started-button {
          font-size: 1rem;
          padding: 12px 25px;
        }

        .section-title {
          font-size: 2rem;
        }

        .section-description {
          font-size: 1rem;
        }

        .service-card {
          width: 90%;
        }

        .testimonial-card {
          max-width: 100%;
        }

        .cta-button {
          font-size: 1rem;
          padding: 12px 25px;
        }
      }

      @media (max-width: 480px) {
        .hero-section {
          height: 50vh; /* Further reduce height on very small screens */
        }

        .hero-content h1 {
          font-size: 1.6rem; /* Smaller font size */
        }

        .hero-content h4 {
          font-size: 0.9rem;
        }

        .get-started-button {
          font-size: 0.9rem;
          padding: 10px 20px;
        }

        .section-title {
          font-size: 1.8rem;
        }

        .section-description {
          font-size: 0.9rem;
        }
      }
    `,
  ],
})
export class HomeComponent {
  services = [
    {
      title: 'Portfolio Creation',
      description: 'Create a customized portfolio effortlessly.',
    },
    {
      title: 'Responsive Design',
      description: 'Our designs are fully responsive and mobile-friendly.',
    },
    {
      title: 'Branding Options',
      description: 'Easily match your portfolio with your brand identity.',
    },
  ];

  testimonials = [
    {
      message: 'This platform made it incredibly easy to create my portfolio.',
      author: 'Alice Johnson',
    },
    {
      message: 'The customization options are fantastic! I love the result.',
      author: 'John Doe',
    },
    {
      message: 'This platform made it incredibly easy to create my portfolio.',
      author: 'Alice Johnson',
    },
  ];
}
