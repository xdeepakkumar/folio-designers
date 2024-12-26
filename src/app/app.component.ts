import {
  Component,
  signal,
  computed,
  OnInit,
  HostListener,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatBadgeModule,
    CustomSidenavComponent,
    HttpClientModule,
    FooterComponent,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  template: `
    <ng-container *ngIf="showLayout">
      <mat-toolbar class="mat-elevation-z3" color="primary">
        <button mat-icon-button (click)="toggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
        <span class="company-name">Folio Designers</span>
        <span class="spacer"></span>
        <button mat-button *ngIf="isLargeScreen" (click)="navigateTo('about')">
          About Us
        </button>
        <button
          mat-button
          *ngIf="isLargeScreen"
          (click)="navigateTo('contact')"
        >
          Contact Us
        </button>
        <!-- Notification and Profile Buttons with Menus -->
        <button
          mat-icon-button
          matBadge=" "
          matBadgeColor="warn"
          matBadgeSize="small"
          matBadgeOverlap="false"
          [matMenuTriggerFor]="notificationMenu"
        >
          <mat-icon>notifications</mat-icon>
        </button>
        <mat-menu #notificationMenu="matMenu">
          <button mat-menu-item>
            <mat-icon>message</mat-icon> Notification 1
          </button>
          <button mat-menu-item>
            <mat-icon>message</mat-icon> Notification 2
          </button>
        </mat-menu>
        <button mat-icon-button [matMenuTriggerFor]="profileMenu">
          <mat-icon>account_circle</mat-icon>
        </button>
        <mat-menu #profileMenu="matMenu">
          <a
            routerLink="user-profile"
            (click)="navigateTo('user-profile')"
            mat-menu-item
            ><mat-icon>person</mat-icon> Profile</a
          >
          <button mat-menu-item (click)="navigateTo('user-profile')">
            <mat-icon>settings</mat-icon> Settings
          </button>
          <!-- Show the Sign Out button if the token exists -->
          <a *ngIf="isLoggedIn" mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon> Logout
          </a>
          <!-- Show the Sign In button if no token exists -->
          <a *ngIf="!isLoggedIn" mat-menu-item (click)="navigateTo('sign-in')">
            <mat-icon>login</mat-icon> Sign In
          </a>
        </mat-menu>
      </mat-toolbar>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          *ngIf="isLargeScreen"
          mode="side"
          [opened]="true"
          [style.width]="sidenavWidth()"
        >
          <app-custom-sidenav [collapsed]="collapsed()"></app-custom-sidenav>
        </mat-sidenav>

        <mat-sidenav
          *ngIf="!isLargeScreen"
          mode="over"
          [opened]="!collapsed()"
          [style.width]="collapsed() ? '0px' : '250px'"
        >
          <app-custom-sidenav [collapsed]="false"></app-custom-sidenav>
        </mat-sidenav>

        <mat-sidenav-content
          class="content"
          [style.margin-left]="isLargeScreen ? sidenavWidth() : '0px'"
        >
          <router-outlet></router-outlet>
        </mat-sidenav-content>
      </mat-sidenav-container>

      <app-footer></app-footer>
    </ng-container>

    <ng-container *ngIf="!showLayout">
      <router-outlet></router-outlet>
    </ng-container>
  `,
  styles: [
    `
      mat-toolbar {
        display: flex;
        align-items: center;
        background: linear-gradient(
          45deg,
          #8e4488,
          #16a099
        ); /* Gemini gradient colors */
      }

      .company-name {
        font-size: 1.25rem;
        margin-left: 2px;
        color: white; /* Text color */
      }

      .spacer {
        flex: 1;
      }

      .content {
        padding: 24px;
        padding-bottom: 60px;
      }

      .sidenav-container {
        height: calc(100vh - 64px);
        position: relative;
      }

      mat-sidenav,
      mat-sidenav-content {
        transition: all 500ms ease-in-out;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  collapsed = signal(false);
  showLayout = true;
  isLoading = false; // To control spinner visibility
  token = '';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Define routes that should not show the layout
        const excludedRoutes = ['/portfolio-details'];
        this.showLayout = !excludedRoutes.includes(event.urlAfterRedirects);
        this.updateTokenStatus(); // Update token status on route change
      }
    });
  }

  ngOnInit() {
    this.updateSidebarState();
    this.updateTokenStatus(); // Ensure token status is checked on init
  }

  updateTokenStatus() {
    this.token = sessionStorage.getItem('token') ?? ''; // Use an empty string as a fallback
  }

  get isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token'); // True if token exists
  }

  toggleSidenav() {
    this.collapsed.set(!this.collapsed());
  }

  sidenavWidth = computed(() => {
    return this.collapsed() ? '65px' : '250px';
  });

  get isLargeScreen() {
    return window.innerWidth >= 960;
  }

  updateSidebarState() {
    this.collapsed.set(!this.isLargeScreen);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSidebarState();
  }

  /* ----------------------------   **/
  logout() {
    const token = sessionStorage.getItem('token');

    if (!token) {
      this.showSnackBar('User is already logged-out', 'error');
      return;
    }

    this.isLoading = true; // Show spinner

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    this.http
      .post<any>('http://localhost:8080/api/v1/auth/sign-out', {}, { headers })
      .subscribe({
        next: (response) => {
          console.log('Sign-out successful', response);
          this.onSignOutSuccess(response.message);
        },
        error: (err) => {
          console.error('Sign-out failed', err);
          this.showSnackBar('Sign-out failed. Please try again.', 'error');
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userinfo');
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }

  private showSnackBar(message: string, type: 'success' | 'error') {
    // Define the style based on the type
    const panelClass = type === 'success' ? 'snack-success' : 'snack-error';

    // Show snackbar in top-right corner
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
      horizontalPosition: 'end', // Right position
      verticalPosition: 'top', // Top position
    });
  }

  private onSignOutSuccess(message: string) {
    // Clear localStorage or sessionStorage data after successful sign-out
    sessionStorage.removeItem('token'); // Remove the token
    sessionStorage.removeItem('userinfo'); // Remove the userinfo
    this.updateTokenStatus(); // Update the token status after sign-out

    // Show a success message using the snackbar
    this.showSnackBar(message || 'Sign-out successful', 'success');

    // Optionally: Redirect the user to a login or home page
    this.router.navigate(['/sign-in']);
  }
}
