import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Interfaces for the data structures
interface Comment {
  commentedBy: string;
  commentText: string;
  profileImage: string;
}

interface News {
  id: string;
  title: string;
  summary: string;
  image: string;
  postedBy: string;
  postedOn: string;
  comments: Comment[];
  likeCount: number;
}

@Component({
  selector: 'app-feed-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="container my-3">
      <h2
        class="text-center mat-h2 mb-1"
        style="color: #2a3d7c; font-size: 1.6rem;"
      >
        Latest News
      </h2>
      <h5 class="text-center text-muted mb-4">
        Explore the exciting developments in space exploration, technology, and
        more!
      </h5>

      <div class="container-fluid mt-4">
        <div class="row">
          <!-- Main Content -->
          <div class="col-12 col-md-8">
            <mat-card class="feed-card">
              <mat-card-header>
                <div mat-card-avatar class="user-avatar"></div>
                <mat-card-title>{{ newsItem?.postedBy }}</mat-card-title>
                <mat-card-subtitle>{{ newsItem?.postedOn }}</mat-card-subtitle>
              </mat-card-header>

              <img
                mat-card-image
                [src]="'../../../assets/news/images/' + newsItem?.image"
                alt="News Image"
                class="news-image"
              />

              <mat-card-content>
                <h2>{{ newsItem?.title }}</h2>
                <p>{{ newsItem?.summary }}</p>
              </mat-card-content>

              <mat-card-actions>
                <button mat-button>
                  <mat-icon>thumb_up</mat-icon> Like ({{ likeCount }})
                </button>
                <button mat-button><mat-icon>share</mat-icon> Share</button>
                <button mat-button><mat-icon>chat</mat-icon> Comment</button>
              </mat-card-actions>

              <mat-divider></mat-divider>

              <!-- Comments Section -->
              <mat-card-content>
                <h3>Comments</h3>
                <div *ngFor="let comment of comments" class="comment">
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="rounded-circle comment-avatar"
                      [src]="
                        '../../../assets/profile/images/' + comment.profileImage
                      "
                      alt="Commenter Avatar"
                    />
                    <div class="ms-2">
                      <strong>{{ comment.commentedBy }}</strong>
                      <p class="mb-0 text-muted">{{ comment.commentText }}</p>
                    </div>
                  </div>
                </div>

                <mat-form-field class="w-100 mt-3">
                  <mat-label>Add a comment</mat-label>
                  <input matInput #commentInput />
                </mat-form-field>
                <button
                  mat-raised-button
                  style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
                  class="mt-2"
                  (click)="addComment(commentInput.value)"
                >
                  Add Comment
                </button>
              </mat-card-content>
            </mat-card>
          </div>

          <!-- Right-Side Content (Simplified) -->
          <div class="col-md-4 d-none d-md-block">
            <mat-card class="right-sidebar sticky-top">
              <mat-card-header>
                <mat-card-title>SpaceX Latest News</mat-card-title>
              </mat-card-header>

              <mat-card-content>
                <img
                  src="https://images.pexels.com/photos/259282/pexels-photo-259282.jpeg"
                  alt="SpaceX News"
                  class="right-sidebar-img"
                />

                <mat-divider></mat-divider>
                <h5>SpaceX Launches Next Mission</h5>
                <p>
                  SpaceX continues to make strides towards interplanetary
                  missions. The next mission will include launching the latest
                  communication satellites.
                </p>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .feed-card {
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      mat-card-title {
        font-size: 1.25rem;
        font-weight: bold;
      }

      mat-card-content h2 {
        font-size: 1.5rem;
        margin-top: 10px;
      }

      .user-avatar {
        background-image: url('https://cdn-icons-png.flaticon.com/512/194/194938.png');
        background-size: cover;
        background-position: center;
      }

      .comment-avatar {
        width: 35px;
        height: 35px;
        object-fit: cover;
      }

      .right-sidebar {
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 15px;
      }

      .sticky-top {
        position: sticky;
        top: 20px;
      }

      .right-sidebar-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
      }

      mat-list-item {
        cursor: pointer;
        transition: background 0.3s ease;
        padding: 10px;
        border-radius: 8px;
      }

      mat-list-item:hover {
        background: #f1f1f1;
      }

      mat-list-item mat-icon {
        color: #5a5a5a;
      }

      mat-list-item div {
        display: flex;
        flex-direction: column;
      }

      .comment {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }

      .comment img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      .comment p {
        font-size: 0.875rem;
        color: #555;
      }

      .comment strong {
        font-weight: bold;
      }

      .news-image {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
      }

      @media (max-width: 767px) {
        .right-sidebar {
          display: none;
        }
      }
    `,
  ],
})
export class FeedDetailsComponent implements OnInit {
  newsItem: News | undefined;
  comments: Comment[] = [];
  likeCount: number = 0;
  token: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    if (newsId) {
      // Call the API to fetch the news details
      this.http
        .get<any>(`http://localhost:8080/api/v1/feed/getDetails/${newsId}`)
        .subscribe((response) => {
          const newsData = response?.response?.[0]; // Assuming response is an array with one object
          if (newsData) {
            // Map the API response to the News object structure
            this.newsItem = {
              id: newsData.id, // Ensure the `id` field is included
              title: newsData.title,
              summary: newsData.summary,
              image: newsData.image, // Adjust if your API provides a full URL or just a relative path
              postedBy: newsData.postedBy,
              postedOn: newsData.postedOn,
              comments: newsData.comments || [], // Ensure comments are set
              likeCount: newsData.likeCount || 0, // Ensure like count is set
            };
            this.comments = this.newsItem.comments || [];
            this.likeCount = this.newsItem.likeCount;
          }
        });
    }
  }

  /**
   * Add a comment only if the user is logged in.
   * The comment will be sent to the backend API.
   */
  addComment(comment: string): void {
    // Check if the user is logged in
    const userInfo = sessionStorage.getItem('userinfo') || '';
    const token = sessionStorage.getItem('token');
    this.token = token;
    if (!this.token) {
      this.snackBar.open('Log-in first to add comment.', 'Close', {
        duration: 3000, // Snackbar duration
        verticalPosition: 'top', // Snackbar position
        horizontalPosition: 'right', // Snackbar position
      });
      return;
    }
    const parsedUserInfo = JSON.parse(userInfo);
    const userId = parsedUserInfo.response[0].userId;
    const profileImageUrl = parsedUserInfo.response[0].profileImageUrl;

    // Check if the comment is not empty
    if (comment.trim()) {
      const feedId = this.route.snapshot.paramMap.get('id');
      if (!feedId) {
        alert('Feed ID not found.');
        return;
      }

      const commentPayload = {
        id: '',
        comment: comment.trim(),
        commentBy: userId,
        feedId: feedId,
      };
      // Send the comment to the backend API
      this.sendComment(commentPayload).subscribe(
        (response) => {
          // On success, push the new comment to the comments array
          this.comments.push({
            commentedBy: 'You',
            commentText: comment.trim(),
            profileImage: '../../../assets/profile/images/' + profileImageUrl,
          });
          this.likeCount += 1;
        },
        (error) => {
          this.snackBar.open('Error occurred while adding comment.', 'Close', {
            duration: 3000, // Snackbar duration
            verticalPosition: 'top', // Snackbar position
            horizontalPosition: 'right', // Snackbar position
          });
        }
      );
    }
  }

  /**
   * Send the comment to the backend API with the provided headers and body.
   */
  sendComment(commentPayload: any): Observable<any> {
    const apiUrl = 'http://localhost:8080/api/v1/feed/addUpdateComment';
    // Set up the headers with the token for authorization
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Content-Type', 'application/json');
    // Make the POST request to the API
    return this.http.post(apiUrl, commentPayload, { headers });
  }
}
