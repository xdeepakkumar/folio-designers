import {
  Component,
  signal,
  computed,
  OnInit,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from './components/custom-sidenav/custom-sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  template: `
    <mat-toolbar class="mat-elevation-z3" color="primary">
      <!-- Menu Button for Collapsing Sidebar -->
      <button mat-icon-button (click)="toggleSidenav()">
        <mat-icon>menu</mat-icon>
      </button>

      <!-- Company Name in Toolbar -->
      <span class="company-name">Folio Designers</span>

      <span class="spacer"></span>

      <!-- Other Toolbar Content -->
      <button mat-button *ngIf="isLargeScreen" (click)="navigateTo('about')">
        About Us
      </button>
      <button mat-button *ngIf="isLargeScreen" (click)="navigateTo('contact')">
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
        <button mat-menu-item><mat-icon>person</mat-icon> Profile</button>
        <button mat-menu-item><mat-icon>settings</mat-icon> Settings</button>
        <button mat-menu-item><mat-icon>logout</mat-icon> Logout</button>
        <a mat-menu-item href="/sign-in">
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
  `,
  styles: [
    `
      mat-toolbar {
        display: flex;
        align-items: center;
        background: linear-gradient(
          45deg,
          #8e2de2,
          #4a00e0
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateSidebarState();
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
}
