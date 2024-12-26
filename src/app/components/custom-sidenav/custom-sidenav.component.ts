import { CommonModule } from '@angular/common';
import { Component, Input, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

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
    MatDividerModule,
  ],
  template: `
    <div class="sidenav-header">
      <img
        [width]="profilePicSize()"
        [height]="profilePicSize()"
        [src]="userProfilePic()"
        alt="profile pic"
      />
      <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
        <h2 [class.hide-data]="!loggedIn">Welcome</h2>
        <p>{{ userName }}</p>
        <p [class.hide-data]="loggedIn">Please sign-in</p>
      </div>
    </div>
    <mat-nav-list>
      <ng-container *ngFor="let item of filteredMenuItems(); let i = index">
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
          >
            {{ item.icon }}
          </mat-icon>
          <span *ngIf="!sideNavCollapsed()" matListItemTitle>
            {{ item.label }}
          </span>
        </a>
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
      .hide-data {
        opacity: 0;
        height: 0 !important;
      }
    `,
  ],
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  loggedIn = false;
  userName = 'Guest';

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    { icon: 'home', label: 'Home', route: 'home' },
    { icon: 'feed', label: 'Daily Feed', route: 'feed' },
    { icon: 'dashboard', label: 'Manage Portfolio', route: 'create-portfolio' },
    { icon: 'visibility', label: 'View Portfolio', route: 'my-portfolio' },
    { icon: 'handshake', label: 'Services', route: 'services' },
    { icon: 'settings', label: 'Settings', route: 'settings' },
    { icon: 'info', label: 'About Us', route: 'about', smallScreenOnly: true },
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
    this.initializeUserData();
    window.addEventListener('resize', () => this.filteredMenuItems());
  }

  initializeUserData() {
    try {
      const userInfo = sessionStorage.getItem('userinfo');
      if (userInfo) {
        const parsedUserInfo = JSON.parse(userInfo);
        this.loggedIn = true;
        this.userName = parsedUserInfo.response[0].name || 'Guest';
      } else {
        this.loggedIn = false;
      }
    } catch (error) {
      console.error('Error parsing userinfo:', error);
      this.loggedIn = false;
    }
  }

  userProfilePic() {
    try {
      const userInfo = sessionStorage.getItem('userinfo');
      if (userInfo) {
        const parsedUserInfo = JSON.parse(userInfo);
        const baseUrl = '../../../assets/profile/images/'; // Make sure this points to the correct server endpoint
        let fileName = parsedUserInfo.response[0].profileImageUrl;

        // If it contains a file path like 'file:///', extract just the filename
        if (fileName.startsWith('file:///')) {
          fileName = fileName.split('\\').pop(); // Extract file name from the path
        }

        return fileName
          ? `${baseUrl}${fileName}`
          : '../../../assets/dummy_user.png';
      }
    } catch (error) {
      console.error('Error parsing userinfo:', error);
    }
    return '../../../assets/OIP.jpg'; // Default placeholder image
  }
}
