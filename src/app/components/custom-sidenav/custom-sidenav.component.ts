import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider'; // Import MatDividerModule

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
  smallScreenOnly?: boolean;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterModule,
    MatDividerModule, // Add MatDividerModule here
  ],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        src="/assets/me.png"
        alt="profile pic"
      />
      <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
        <h2
          style="
    background: linear-gradient(135deg, #16a085, #732d91);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 13px;
    text-transform: uppercase;
    border: none;
    transition: background-color 0.3s ease-in-out;
  "
        >
          Welcome
        </h2>

        <p>Deepak Kumar</p>
      </div>
    </div>
    <mat-nav-list>
      <!-- Loop through menu items -->
      <ng-container *ngFor="let item of filteredMenuItems(); let i = index">
        <!-- Add divider after "Daily Feed" -->
        <mat-divider *ngIf="item.label === 'Manage Portfolio'"></mat-divider>

        <a
          mat-list-item
          class="menu-item"
          [routerLink]="item.route"
          routerLinkActive="selected-menu-item"
          #rla="routerLinkActive"
          [activated]="rla.isActive"
        >
          <mat-icon
            [fontSet]="
              rla.isActive ? 'material-icons' : 'material-icons-outlined'
            "
            matListItemIcon
            >{{ item.icon }}</mat-icon
          >
          <span *ngIf="!sideNavCollapsed()" matListItemTitle>{{
            item.label
          }}</span>
        </a>

        <!-- Add divider before "Services" -->
        <mat-divider *ngIf="item.label === 'View Portfolio'"></mat-divider>
      </ng-container>
    </mat-nav-list>
  `,
  styles: [
    `
      :host * {
        transition: all 500ms ease-in-out;
      }
      .sidenav-header {
        padding-top: 24px;
        text-align: center;
        > img {
          border-radius: 100%;
          object-fit: cover;
          margin-bottom: 10px;
        }
        .header-text {
          height: 3rem;
          > h2 {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5rem;
          }
          > p {
            margin: 0;
            font-size: 0.8rem;
          }
        }
        .hide-header-text {
          opacity: 0;
          height: 0 !important;
        }
      }
      .menu-item {
        border-left: 5px solid;
        border-left-color: rgba(0, 0, 0, 0);
      }
      .selected-menu-item {
        border-left-color: blue;
        background: rgba(0, 0, 0, 0.05);
      }
    `,
  ],
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home',
    },
    {
      icon: 'feed',
      label: 'Daily Feed',
      route: 'feed',
    },
    {
      icon: 'dashboard',
      label: 'Manage Portfolio',
      route: 'create-portfolio',
    },
    {
      icon: 'visibility',
      label: 'View Portfolio',
      route: 'my-portfolio',
    },
    {
      icon: 'handshake',
      label: 'Services',
      route: 'services',
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings',
    },
    {
      icon: 'info',
      label: 'About Us',
      route: 'about',
      smallScreenOnly: true,
    },
    {
      icon: 'chat',
      label: 'Contact Us',
      route: 'contact',
      smallScreenOnly: true,
    },
  ]);

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '32' : '100'));

  filteredMenuItems = computed(() =>
    this.menuItems().filter(
      (item) => !item.smallScreenOnly || this.isSmallScreen()
    )
  );

  isSmallScreen() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  constructor() {
    // Update filtered items whenever the screen is resized
    window.addEventListener('resize', () => this.filteredMenuItems());
  }
}
