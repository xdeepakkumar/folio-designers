import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

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
    <!-- Hero Section -->
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
            style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
            class="get-started-button"
            [routerLink]="'/create-portfolio'"
          >
            Get Started
          </a>
          <a
            mat-stroked-button
            style="border-width: 2px; padding: 12px 24px; font-size: 12px; text-transform: uppercase; color: linear-gradient(135deg, #16a085, #732d91);"
            class="learn-more-button"
            [routerLink]="'/about'"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="value-proposition">
      <h2 class="section-title">Why Choose Us?</h2>
      <div class="value-items">
        <div class="value-item">
          <mat-icon>speed</mat-icon>
          <h4>Fast Setup</h4>
          <p>
            Get your portfolio up and running in minutes with our intuitive
            platform.
          </p>
        </div>
        <div class="value-item">
          <mat-icon>brush</mat-icon>
          <h4>Custom Designs</h4>
          <p>
            Choose from a variety of templates that reflect your unique style
            and personality.
          </p>
        </div>
        <div class="value-item">
          <mat-icon>group</mat-icon>
          <h4>Built for Collaboration</h4>
          <p>
            Share your work with clients, teams, and collaborators with ease.
          </p>
        </div>
      </div>
    </section>

    <!-- Product Features -->
    <!-- <section class="features-section">
      <h2 class="section-title">Features You’ll Love</h2>
      <div class="features-list">
        <mat-card class="feature-card">
          <mat-card-title>Easy-to-Use Interface</mat-card-title>
          <mat-card-content>
            A sleek, user-friendly interface that makes portfolio creation a
            breeze.
          </mat-card-content>
        </mat-card>
        <mat-card class="feature-card">
          <mat-card-title>Real-Time Preview</mat-card-title>
          <mat-card-content>
            See exactly how your portfolio will look with instant previews.
          </mat-card-content>
        </mat-card>
        <mat-card class="feature-card">
          <mat-card-title>Mobile-Responsive</mat-card-title>
          <mat-card-content>
            Your portfolio will look great on any device, from desktop to
            mobile.
          </mat-card-content>
        </mat-card>
      </div>
    </section> -->

    <!-- Our Services Section -->
    <section class="services-section">
      <h2 class="section-title">Our Services</h2>
      <div class="services-list">
        <div class="service-card">
          <mat-icon>laptop_mac</mat-icon>
          <h3>Portfolio Design</h3>
          <p>
            Responsive, visually appealing websites tailored to showcase your
            work.
          </p>
        </div>
        <div class="service-card">
          <mat-icon>design_services</mat-icon>
          <h3>Graphic Design</h3>
          <p>Custom logos and branding to help your business stand out.</p>
        </div>
        <div class="service-card">
          <mat-icon>camera_alt</mat-icon>
          <h3>Web Design</h3>
          <p>
            Professional photography services for events, portraits, and more.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <h2 class="section-title">What Our Users Say</h2>
      <div class="testimonials">
        <div class="testimonial">
          <h4>"A game-changer for my freelance business!"</h4>
          <p>- Sarah L., Web Designer</p>
        </div>
        <div class="testimonial">
          <h4>
            "I created my portfolio in under an hour. Simple and effective!"
          </h4>
          <p>- James K., Photographer</p>
        </div>
        <div class="testimonial">
          <h4>"Highly recommend for any creative professional!"</h4>
          <p>- Emma T., Graphic Designer</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <h2 class="section-title">How It Works</h2>
      <div class="steps">
        <div class="step">
          <mat-icon>account_circle</mat-icon>
          <h4>Sign Up</h4>
          <p>Create an account and start building your portfolio right away.</p>
        </div>
        <div class="step">
          <mat-icon>design_services</mat-icon>
          <h4>Customize</h4>
          <p>
            Choose your favorite template and personalize it to fit your style.
          </p>
        </div>
        <div class="step">
          <mat-icon>launch</mat-icon>
          <h4>Publish</h4>
          <p>
            Once your portfolio is ready, hit publish and share it with the
            world!
          </p>
        </div>
      </div>
    </section>

    <h2 class="section-title mt-5">You're Almost There!</h2>
    <!-- Call to Action Section -->
    <section class="cta-section">
      <p>Create a professional portfolio in minutes.</p>
      <a
        mat-raised-button
        color="accent"
        class="cta-button"
        [routerLink]="'/create-portfolio'"
        >Let's Start</a
      >
    </section>
  `,
  styles: [
    `
      /* Global Styles */
      .section-title {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
        color: #333;
      }

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

      .hero-content h1 {
        font-size: 2.5rem;
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

      /* Value Proposition Section */
      .value-proposition {
        background-color: #f4f6f9;
        padding: 40px 20px;
        text-align: center;
      }

      .value-items {
        display: flex;
        justify-content: center;
        gap: 30px;
      }

      .value-item {
        flex: 1;
        padding: 20px;
      }

      .value-item mat-icon {
        font-size: 3rem;
        color: #ff6f61;
      }

      /* Features Section */
      .features-section {
        background-color: #fafafa;
        padding: 40px 20px;
      }

      .features-list {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }

      .feature-card {
        width: 280px;
      }

      /* Our Services Section */
      .services-section {
        padding: 40px 20px;
        background-color: #f9f9f9;
      }

      .services-list {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
      }

      .service-card {
        text-align: center;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 350px;
      }

      .service-card mat-icon {
        font-size: 3rem;
        color: #16a085;
      }

      .service-card h3 {
        margin-top: 10px;
        font-size: 1.5rem;
      }

      .service-card p {
        font-size: 1rem;
        color: #666;
      }

      /* Testimonials Section */
      .testimonials-section {
        background-color: #e3f2fd;
        padding: 50px 20px;
        text-align: center;
      }

      .testimonials {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
      }

      .testimonial {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 350px;
      }

      /* How It Works Section */
      .how-it-works {
        padding: 50px 20px;
        background-color: #f4f6f9;
        text-align: center;
      }

      .steps {
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
      }

      .step {
        text-align: center;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        width: 350px;
      }

      /* Call to Action Section */
      .cta-section {
        background: linear-gradient(135deg, #16a085, #732d91);
        color: #fff;
        text-align: center;
        padding: 40px 20px;
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
        .value-items,
        .features-list,
        .services-list,
        .steps {
          flex-direction: column;
          align-items: center;
        }

        .value-item,
        .feature-card,
        .service-card,
        .step,
        .testimonial {
          width: 100%;
        }
      }
    `,
  ],
})
export class HomeComponent {
  voted = false;

  // Service info
  services = [
    {
      icon: 'laptop_mac',
      title: 'Web Design',
      description:
        'We create visually appealing, responsive websites tailored to your needs.',
    },
    {
      icon: 'design_services',
      title: 'Graphic Design',
      description:
        'Custom logos, branding, and creative designs to make your brand stand out.',
    },
    {
      icon: 'camera_alt',
      title: 'Photography',
      description:
        'Capturing your moments with professional photography services for events, portraits, and more.',
    },
  ];

  vote(option: string) {
    this.voted = true;
    console.log('User voted for:', option);
  }
}
