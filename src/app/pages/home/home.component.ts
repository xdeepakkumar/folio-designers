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
    <!-- Hero Section (Untouched) -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Build a Portfolio That Reflects Your Excellence</h1>
        <h4
          style="color:#333333; text-align: center; width: 80%; margin: 0 auto;"
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

    <!-- Testimonial Section - Redesigned -->
    <h2 class="section-title">What Our Users Say</h2>
    <section class="testimonials-section">
      <div class="testimonial-cards">
        <mat-card
          *ngFor="let testimonial of testimonials"
          class="testimonial-card"
        >
          <mat-card-header>
            <div class="testimonial-header">
              <img
                mat-card-avatar
                *ngIf="testimonial.avatar"
                [src]="testimonial.avatar"
                alt="User Avatar"
                class="testimonial-avatar"
              />
              <div class="testimonial-info">
                <h3>{{ testimonial.author }}</h3>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </mat-card-header>
          <mat-card-content>
            <p class="quote">
              <i class="fa fa-quote-left"></i>
              {{ testimonial.message }}
              <i class="fa fa-quote-right"></i>
            </p>
          </mat-card-content>
        </mat-card>
      </div>
    </section>

    <!-- Interactive Poll Section -->
    <h2 class="section-title mb-5">Emphasizing User Feedback?</h2>
    <section class="poll-section">
      <div class="poll-container">
        <button mat-raised-button class="poll-option" (click)="vote('option1')">
          Custom Themes
        </button>
        <button mat-raised-button class="poll-option" (click)="vote('option2')">
          Portfolio Analytics
        </button>
        <button mat-raised-button class="poll-option" (click)="vote('option3')">
          Client Integration
        </button>
      </div>
      <p class="poll-thanks" *ngIf="voted">Thank you for voting!</p>
    </section>

    <!-- FAQ Section - More Interactive -->
    <h2 class="section-title">Frequently Asked Questions</h2>

    <section class="faq-section">
      <div class="faq-cards">
        <div *ngFor="let faq of faqs" class="faq-card">
          <!-- FAQ Question Section -->
          <div class="faq-question" (click)="toggleAnswer(faq)">
            <h3>{{ faq.question }}</h3>
            <mat-icon>{{ faq.open ? 'expand_less' : 'expand_more' }}</mat-icon>
          </div>

          <!-- FAQ Answer Section -->
          <div
            class="faq-answer"
            *ngIf="faq.open"
            [@expand]="faq.open ? 'open' : 'closed'"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <h2 class="section-title">You're Almost There!</h2>
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
      /* Hero Section (Untouched) */
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

      .hero-content h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }

      .hero-content h4 {
        font-size: 1.1rem;
        margin-bottom: 2rem;
      }

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
        background-color: transparent;
        transition: all 0.3s ease;
      }

      .learn-more-button:hover {
        background-color: #16a085; /* Teal background */
        color: #ffffff; /* White text on hover */
      }

      /* Testimonial Section */
      .testimonials-section {
        background-color: #f9f9f9;
        padding: 30px 20px;
        text-align: center;
      }

      /* General Section Styling */
      .section-title {
        font-size: 1.2rem;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .testimonial-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
      }

      .testimonial-card {
        width: 300px;
        padding: 20px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      }

      .testimonial-header {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .testimonial-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .testimonial-info {
        text-align: left;
      }

      .quote {
        font-style: italic;
        color: #555;
        margin-top: 15px;
      }

      /* FAQ Section */
      .faq-section {
        padding: 40px 20px;
        background-color: #f9f9f9;
      }

      .faq-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }

      .faq-card {
        width: 100%;
        max-width: 600px;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }

      .faq-answer {
        font-size: 1rem;
        margin-top: 10px;
        color: #333;
        display: none; /* Initially hide the answer */
        opacity: 0;
        height: 0; /* Set height to 0 when the answer is closed */
        overflow: hidden;
        transition: opacity 0.3s ease, height 0.3s ease;
      }

      /* Styles for when the answer is open */
      .faq-answer.open {
        display: block; /* Ensure the answer is shown */
        opacity: 1;
        height: auto; /* Allow the content to expand fully */
      }

      /* Optional: Style for answers that are opened (Active state) */
      .faq-answer.open {
        background-color: #f0f8ff; /* Light background for open answers */
        color: #333; /* Text color */
      }

      /* Poll Section */
      .poll-section {
        background-color: #e3f2fd;
        padding: 50px 20px;
        text-align: center;
      }

      .poll-container {
        display: flex;
        justify-content: center;
        gap: 20px;
      }

      .poll-option {
        background-color: #2196f3;
        color: white;
        font-size: 1.1rem;
        padding: 15px 30px;
        border-radius: 30px;
        transition: background-color 0.3s;
      }

      .poll-option:hover {
        background-color: #1976d2;
      }

      .poll-thanks {
        margin-top: 20px;
        font-size: 1.2rem;
        color: #4caf50;
      }

      /* Call to Action Section */
      .cta-section {
        background: linear-gradient(135deg, #16a085, #732d91);
        color: #fff;
        text-align: center;
        padding: 40px 20px;
        margin-top: 40px;
        border-radius: 10px;
      }

      .cta-button {
        background-color: #732d91;
        color: white;
        padding: 12px 30px;
        font-size: 1.2rem;
        border-radius: 30px;
        margin-top: 20px;
      }

      .cta-button:hover {
        background-color: #16a085;
      }

      /* Responsive Styles */
      @media (max-width: 768px) {
        .testimonial-card {
          width: 100%;
        }

        .poll-container {
          flex-direction: column;
        }

        .cta-button {
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class HomeComponent {
  voted = false;
  testimonials = [
    {
      message: 'This platform made it incredibly easy to create my portfolio.',
      author: 'Anjali Joshi',
      role: 'Graphic Designer',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      message: 'The customization options are fantastic! I love the result.',
      author: 'Kush kumar',
      role: 'Web Developer',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      message: 'This platform made it incredibly easy to create my portfolio.',
      author: 'Sahil Gupta',
      role: 'Graphic Designer',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

  faqs = [
    {
      question: 'How do I create a portfolio?',
      answer:
        'Simply sign up, choose a template, and customize it with your content.',
      open: false,
    },
    {
      question: 'Can I customize the design?',
      answer:
        'Yes, we offer multiple templates and design customization options.',
      open: false,
    },
    {
      question: 'Is the portfolio mobile-friendly?',
      answer: 'Absolutely, all our templates are responsive.',
      open: false,
    },
  ];

  toggleAnswer(faq: any) {
    faq.open = !faq.open;
  }

  vote(option: string) {
    this.voted = true;
    console.log('User voted for:', option);
  }
}
