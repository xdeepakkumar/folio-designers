import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="container my-4">
      <h2 class="text-center mat-h2 mb-3">Daily News Feed</h2>
      <h5 class="text-center mat-h5 text-muted mb-4">
        Stay updated with the latest news stories
      </h5>
      <div class="row">
        <div class="col-md-6 mb-4" *ngFor="let news of newsList">
          <mat-card class="news-item">
            <mat-card-header>
              <mat-card-title>{{ news.title }}</mat-card-title>
            </mat-card-header>
            <img
              mat-card-image
              [src]="news.image"
              alt="News Image"
              class="news-image"
            />
            <mat-card-content>
              <p>{{ news.summary }}</p>
            </mat-card-content>
            <mat-card-actions>
              <button
                mat-raised-button
                color="primary"
                class="small-raised-button"
              >
                Read More
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .news-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .news-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      .news-image {
        width: 100%;
        height: 180px; /* Define a fixed height */
        object-fit: cover; /* Ensures the image scales nicely */
        border-bottom: 2px solid #eee; /* Optional, adds separation */
      }

      mat-card-title {
        font-size: 1.2rem;
        font-weight: bold;
      }

      mat-card-content p {
        color: #555;
      }
    `,
  ],
})
export class FeedComponent {
  newsList = [
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: "Headline for Today's Top Story",
      summary:
        'Brief summary of the top story, providing a teaser for readers to click and read more...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
  ];
}
