import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

interface News {
  id: number;
  title: string;
  summary: string;
  image: string;
  detailsId: String;
}

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatPaginatorModule],
  template: `
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
              [src]="'../../../assets/news/images/' + news.image"
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
                (click)="viewDetails(news.detailsId)"
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
  `,
  styles: [
    `
      .news-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 380px;
        display: flex;
        flex-direction: column;
      }
      .news-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }
      .news-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-bottom: 2px solid #eee;
      }
      mat-card-title {
        font-size: 1.2rem;
        font-weight: bold;
        height: 60px;
        overflow: hidden;
      }
      mat-card-content {
        flex-grow: 1;
        color: #555;
        margin-top: 5px;
        font-weight: 500;
      }
      mat-card-content p {
        font-size: 0.9rem;
        height: 70px;
        overflow: hidden;
      }
      .mat-card-actions {
        margin-top: auto;
      }
      .small-raised-button {
        font-size: 0.8rem;
      }
    `,
  ],
})
export class FeedComponent implements OnInit {
  newsList: News[] = [];
  pagedNewsList: News[] = [];
  pageSize = 5;

  constructor(
    private router: Router,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.http
      .get<{ message: string; response: News[] }>(
        'http://localhost:8080/api/v1/feed/getAllFeed'
      )
      .subscribe({
        next: (response) => {
          console.log('API Response:', response); // Log to check the response
          if (
            response &&
            response.response &&
            Array.isArray(response.response)
          ) {
            this.newsList = response.response;
            this.updatePagedNewsList(0); // Call to update paged list when data is fetched
          } else {
            console.error('Unexpected response structure:', response);
            this.newsList = [];
            this.updatePagedNewsList(0); // Update paged list in case of error
          }
          this.cdRef.detectChanges(); // Ensure Angular detects changes
        },
        error: (error) => {
          console.error('Error fetching news:', error);
          this.newsList = [];
          this.updatePagedNewsList(0); // Update paged list in case of error
          this.cdRef.detectChanges(); // Ensure Angular detects changes
        },
      });
  }

  // Handles page change events
  onPageChange(event: any) {
    console.log('Page Change Event:', event); // Log page change event
    this.updatePagedNewsList(event.pageIndex); // Update paged list based on page index
  }

  // Updates the paged news list based on the current page index
  updatePagedNewsList(pageIndex: number) {
    console.log(`Updating page: ${pageIndex}`);
    const startIndex = pageIndex * this.pageSize;
    this.pagedNewsList = this.newsList.slice(
      startIndex,
      startIndex + this.pageSize
    );
    console.log('Paged News List:', this.pagedNewsList); // Log paged news list for debugging
  }

  // Navigate to FeedDetailsComponent with the news ID
  viewDetails(newsId: String): void {
    this.router.navigate(['/feed-details', newsId]);
  }
}
