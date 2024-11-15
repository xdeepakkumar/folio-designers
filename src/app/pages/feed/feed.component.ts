import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator'; // Import MatPaginatorModule

// Define an interface for news item
interface News {
  title: string;
  summary: string;
  image: string;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatPaginatorModule], // Add MatPaginatorModule here
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container my-4">
          <h2 class="text-center mat-h2 mb-1" style="color: #2a3d7c;  font-size: 1.6rem;">
            Daily News Feed
          </h2>
          <h5 class="text-center text-muted mb-4">
            Keep track of the latest news developments
          </h5>
          <div class="row">
            <div class="col-md-6 mb-4" *ngFor="let news of pagedNewsList">
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

          <!-- Pagination -->
          <mat-paginator
            [length]="newsList.length"
            [pageSize]="pageSize"
            [pageSizeOptions]="[5, 10, 25, 100]"
            (page)="onPageChange($event)"
          ></mat-paginator>
        </div>
      </mat-card-content>
    </mat-card>
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

      .small-raised-button {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class FeedComponent implements OnInit {
  // Type the newsList array using the interface
  newsList: News[] = [
    {
      title: 'World Markets Soar Amid Global Recovery',
      summary:
        'Global markets witnessed a significant uptick as economic recovery gains momentum, with major indices hitting record highs...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'SpaceX Successfully Launches Mars Mission',
      summary:
        'SpaceX’s ambitious mission to Mars has successfully launched, bringing humanity one step closer to interplanetary travel...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'Tech Giants Join Forces for Green Innovation',
      summary:
        'In an unprecedented collaboration, top tech companies have announced a series of green initiatives aimed at reducing carbon footprints...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'Breakthrough in Cancer Research Promises Hope',
      summary:
        'A new breakthrough in cancer research has opened up possibilities for more effective treatments and a potential cure...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'World’s First Fully Autonomous Car Approved for Roads',
      summary:
        'A major leap forward in automotive technology as the first fully autonomous car receives approval for public road use...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'Global Warming: New Report Raises Urgent Concerns',
      summary:
        'A new report on climate change warns that global warming could have irreversible effects on the planet if immediate action is not taken...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
    {
      title: 'The Rise of Electric Aviation: A Greener Future for Air Travel',
      summary:
        'Electric aviation is rapidly growing as a viable alternative to traditional air travel, promising reduced emissions and greener skies...',
      image: 'https://cdn-icons-png.flaticon.com/512/5395/5395993.png',
    },
  ];

  pageSize = 5; // Default page size
  pagedNewsList: News[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialize the paged list
    this.updatePagedNewsList(0);
  }

  // Handle page changes
  onPageChange(event: any) {
    this.updatePagedNewsList(event.pageIndex);
  }

  // Update the displayed news list based on the current page
  updatePagedNewsList(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    this.pagedNewsList = this.newsList.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }
}
