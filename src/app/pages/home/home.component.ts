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
        <h1>Build a Portfolio That Reflects Your Excellence</h1>
        <h4
          style="color:black; text-align: center; width: 80%; margin: 0 auto;"
        >
          Present your skills and achievements in a way that resonates with
          clients, employers, and collaborators....
        </h4>
        <div class="hero-buttons">
          <a
            mat-raised-button
            color="primary"
            class="get-started-button"
            [routerLink]="'/create-portfolio'"
          >
            Get Started
          </a>
          <a
            mat-stroked-button
            color="accent"
            class="learn-more-button"
            [routerLink]="'/about'"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <h2 class="section-title">Testimonials</h2>
    <section class="testimonials-section mt-5">
      <div class="testimonial-cards">
        <mat-card
          class="testimonial-card"
          *ngFor="let testimonial of testimonials"
        >
          <mat-card-content>
            <p class="quote text-muted">"{{ testimonial.message }}"</p>
            <p class="author">- {{ testimonial.author }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>

    <h2 class="section-title">Ready to Start?</h2>

    <section class="cta-section">
      <p>Create a professional portfolio in minutes.</p>
      <a
        mat-raised-button
        color="accent"
        class="cta-button"
        [routerLink]="'/create-portfolio'"
      >
        Let's Start
      </a>
    </section>
  `,
  styles: [
    `
      /* Hero Section */
      .hero-section {
        position: relative;
        background: url('src/assets/hero-bg-4.jpg') no-repeat center center /
          cover;
        color: #fff;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 20px;
      }

      /* Hero Content Styling */
      .hero-content h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: #ffffff; /* Bright white for contrast */
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4); /* Subtle shadow for readability */
      }

      .hero-content h4 {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        color: #e3e3e3; /* Softer white tone */
        line-height: 1.6;
        text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow */
      }

      /* Buttons Container */
      .hero-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 20px;
      }

      /* Get Started Button */
      .get-started-button {
        background-color: #8e44ad; /* Rich purple */
        color: #ffffff; /* White text */
        font-size: 1.2rem;
        font-weight: 500;
        padding: 10px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      .get-started-button:hover {
        background-color: #732d91; /* Darker purple on hover */
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
      }

      /* Learn More Button */
      .learn-more-button {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 10px 30px;
        color: #16a085; /* Teal */
        border: 2px solid #16a085;
        border-radius: 8px;
        background-color: transparent;
        transition: all 0.3s ease;
      }

      .learn-more-button:hover {
        background-color: #16a085; /* Teal background */
        color: #ffffff; /* White text on hover */
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .hero-section {
          height: 60vh;
        }
        .hero-content h1 {
          font-size: 2rem;
        }
        .hero-content h4 {
          font-size: 1rem;
        }
        .hero-buttons {
          flex-direction: column;
          gap: 10px;
        }
      }

      /* General Section Styling */
      .section-title {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .section-description {
        text-align: center;
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
        background: linear-gradient(
          135deg,
          #16a085,
          #732d91
        ); /* Reversed gradient from teal to purple */
        color: #fff; /* White text for contrast */
        text-align: center;
        padding: 40px 20px;
        margin-top: 40px;
        border-radius: 10px; /* Rounded corners for a modern look */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
      }

      /* Button styling to match CTA */
      .cta-button {
        background-color: #732d91; /* Matching purple color for the button */
        color: white; /* White text on the button */
        border-radius: 30px; /* Rounded corners for a softer button appearance */
        padding: 12px 24px; /* Adjusted padding for balance */
        font-size: 16px; /* Slightly larger font size */
        text-transform: uppercase; /* All caps text for a bolder look */
      }

      .cta-button:hover {
        background-color: #16a085; /* Change button to the teal color on hover */
        transition: background-color 0.3s ease-in-out; /* Smooth hover effect */
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
        .small-raised-button {
          font-size: 0.8rem;
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
