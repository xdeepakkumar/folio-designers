import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

interface News {
  id: number;
  title: string;
  summary: string;
  image: string;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatPaginatorModule],
  template: `
    <mat-card>
      <mat-card-content>
        <div class="container my-4">
          <h2
            class="text-center mat-h2 mb-1"
            style="color: #2a3d7c; font-size: 1.6rem;"
          >
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
                    style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                    (click)="viewDetails(news.id)"
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
        height: 380px; /* Fixed height for each card */
        display: flex;
        flex-direction: column;
      }

      .news-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      .news-image {
        width: 100%;
        height: 180px; /* Fixed height for the image */
        object-fit: cover;
        border-bottom: 2px solid #eee;
      }

      mat-card-title {
        font-size: 1.2rem;
        font-weight: bold;
        height: 60px; /* Fixed height for title */
        overflow: hidden; /* Prevent long titles from breaking the layout */
      }

      mat-card-content {
        flex-grow: 1; /* Makes content area take the remaining space */
        color: #555;
      }

      mat-card-content p {
        font-size: 0.9rem;
        height: 70px; /* Adjust the height to fit the text */
        overflow: hidden; /* Ensure text is clipped if it's too long */
      }

      .mat-card-actions {
        margin-top: auto; /* Pushes the actions to the bottom of the card */
      }

      .small-raised-button {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class FeedComponent implements OnInit {
  newsList: News[] = [
    {
      id: 1,
      title: 'Red Monsters: Webb Space Telescope Discovers Early Galaxies',
      summary:
        'The Webb Space Telescope has uncovered ultra-massive early galaxies known as red monsters, challenging existing models of galaxy formation...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 2,
      title: 'Apple’s iPhone 15 Launches with Revolutionary Features',
      summary:
        'Apple’s latest iPhone 15 features breakthrough technology, including enhanced AI capabilities and a stunning new design...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 3,
      title: 'SpaceX Launches Mars Mission, Aims for First Human Landing',
      summary:
        'SpaceX has successfully launched its Mars mission, aiming to establish a permanent human presence on the Red Planet...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 4,
      title: 'Electric Aircraft: A New Era in Aviation Takes Flight',
      summary:
        'Electric aircraft are changing the future of air travel, reducing carbon emissions and paving the way for a greener aviation industry...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 5,
      title: 'Breakthrough Cancer Treatment Shows Promise in Clinical Trials',
      summary:
        'New cancer treatments are showing unprecedented success in clinical trials, with hopes for wider applications in the near future...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 6,
      title: 'World’s First Fully Autonomous Car Hits the Road',
      summary:
        'The first fully autonomous car has been approved for public roads, marking a major milestone in the future of transportation...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
    {
      id: 7,
      title: 'Breakthrough in Space Tourism with Suborbital Flights',
      summary:
        'New developments in space tourism are opening doors to suborbital flights, making space travel more accessible to the public...',
      image: 'https://www.spacex.com/static/images/share.jpg',
    },
  ];

  pageSize = 5;
  pagedNewsList: News[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updatePagedNewsList(0);
  }

  onPageChange(event: any) {
    this.updatePagedNewsList(event.pageIndex);
  }

  updatePagedNewsList(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    this.pagedNewsList = this.newsList.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  // Navigate to FeedDetailsComponent with the news ID
  viewDetails(newsId: number): void {
    this.router.navigate(['/feed-details', newsId]);
  }
}
