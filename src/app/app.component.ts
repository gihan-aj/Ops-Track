import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';

import { NavigationLinkInterface } from './shared/models/navigation-link.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    SideMenuComponent,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ops-track';

  navLinks: NavigationLinkInterface[] = [
    {
      name: 'Job Records',
      routerLink: 'job-records',
    },
    {
      name: 'Reports',
      routerLink: 'reports',
    },
    {
      name: 'Configuration',
      routerLink: 'configuration',
    },
    {
      name: 'User Management',
      routerLink: 'user-management',
    },
  ];

  sideMenuVisible: boolean = true;
  sideMenuMode: MatDrawerMode = 'side';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.sideMenuVisible = false;
      this.sideMenuMode = 'over';
    } else {
      this.sideMenuVisible = true;
      this.sideMenuMode = 'side';
    }
  }

  toggleSideMenuEvent($event: boolean) {
    this.sideMenuVisible = !this.sideMenuVisible;
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }
}
