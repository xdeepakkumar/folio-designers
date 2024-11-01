import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { Router } from '@angular/router'; // Import Router for navigation
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';

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
  ],
  template: `
    <mat-toolbar class="mat-elevation-z3">
      <!-- Menu Button for Collapsing Sidebar -->
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>

      <!-- Company Name in Toolbar -->
      <span class="company-name">Folio Designers</span>

      <span class="spacer"></span>

      <!-- About Us Button Visible on Large Screens -->
      <button mat-button *ngIf="isLargeScreen" (click)="navigateTo('about')">
        About Us
      </button>

      <!-- Contact Us Button Visible on Large Screens -->
      <button mat-button *ngIf="isLargeScreen" (click)="navigateTo('contact')">
        Contact Us
      </button>

      <!-- Notification Bell with Badge and Dropdown Menu -->
      <button
        mat-icon-button
        matBadge=" "
        matBadgeColor="warn"
        matBadgeSize="small"
        matBadgeOverlap="false"
        [matMenuTriggerFor]="notificationMenu"
        class="notification-button"
      >
        <mat-icon>notifications</mat-icon>
      </button>
      <mat-menu #notificationMenu="matMenu" class="primary-menu">
        <button mat-menu-item>
          <mat-icon>message</mat-icon>
          Notification 1
        </button>
        <button mat-menu-item>
          <mat-icon>message</mat-icon>
          Notification 2
        </button>
        <button mat-menu-item>
          <mat-icon>message</mat-icon>
          Notification 3
        </button>
      </mat-menu>

      <!-- User Profile with Dropdown Menu -->
      <button mat-icon-button [matMenuTriggerFor]="profileMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <mat-menu #profileMenu="matMenu" class="primary-menu">
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          Profile
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          Settings
        </button>
        <button mat-menu-item>
          <mat-icon>logout</mat-icon>
          Logout
        </button>
      </mat-menu>
    </mat-toolbar>

    <!-- Sidenav and Content Sections (Unchanged) -->
    <mat-sidenav-container>
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
        <app-custom-sidenav [collapsed]="collapsed()"></app-custom-sidenav>
      </mat-sidenav>
      <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <!-- Sticky Footer -->
    <footer class="sticky-footer">
      <div class="footer-content">
        <span>&copy; 2024 Portfolio Designers. All Rights Reserved.</span>
      </div>
    </footer>
  `,
  styles: [
    `
      mat-toolbar {
        position: relative;
        z-index: 5;
        display: flex;
        align-items: center;
      }
      .company-name {
        font-size: 1.25rem;
        font-weight: bold;
        margin-left: 8px;
      }
      .spacer {
        flex: 1;
      }
      .content {
        padding: 24px;
        padding-bottom: 60px;
      }
      mat-sidenav-container {
        height: calc(100vh - 64px);
        position: relative;
      }
      mat-sidenav,
      mat-sidenav-content {
        transition: all 500ms ease-in-out;
      }
      .notification-button .mat-badge-content {
        transform: scale(0.8) translate(40%, -30%);
      }
      .sidebar-menu {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .primary-menu {
        color: var(--mat-primary);
      }
      .sticky-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f8f8f8;
        padding: 10px;
        text-align: center;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
      }
    `,
  ],
})
export class AppComponent {
  title = 'folio-designers';
  collapsed = signal(false);

  constructor(private router: Router) {}

  toggleSidenav() {
    this.collapsed.set(!this.collapsed());
  }

  sidenavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  get isLargeScreen() {
    return window.innerWidth >= 960;
  }
}
