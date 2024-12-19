import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { HelpComponent } from './pages/help/help.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InvalidPageComponent } from './pages/invalid-page/invalid-page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { MyPortfolioComponent } from './components/my-portfolio/my-portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { FeedDetailsComponent } from './components/feed-details/feed-details.component';
import { ForgotPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'create-portfolio',
    component: DashboardComponent,
  },
  {
    path: 'my-portfolio',
    component: MyPortfolioComponent,
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
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio-details',
    component: PortfolioDetailsComponent, // No changes here
    data: { layout: 'blank' },
  },
  {
    path: 'feed-details/:id',
    component: FeedDetailsComponent,
  },
  {
    path: 'forget-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'api/v1/auth/reset-password/:token/:email',
    component: ResetPasswordComponent,
  },
  {
    path: '**',
    component: InvalidPageComponent,
  },
];
