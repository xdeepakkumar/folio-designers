import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HelpComponent } from './pages/help/help.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InvalidPageComponent } from './pages/invalid-page/invalid-page.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    component: InvalidPageComponent,
  },
];
