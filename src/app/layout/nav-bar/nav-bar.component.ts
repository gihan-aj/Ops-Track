import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { NavigationLinkInterface } from '../../shared/models/navigation-link.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', [animate('300ms ease-out')]),
      transition('out => in', [animate('300ms ease-in')]),
    ]),
  ],
})
export class NavBarComponent {
  toggleSideMenu = output<boolean>();
  sideMenuVisible = input<boolean>();

  onToggleSideMenu() {
    this.toggleSideMenu.emit(true);
  }

  userMenuItems: NavigationLinkInterface[] = [
    {
      name: 'Log In',
      routerLink: 'log-in',
      icon: 'login',
    },
    {
      name: 'Create New Account',
      routerLink: 'register',
      icon: 'person_add',
    },
    {
      name: 'Settings',
      routerLink: 'user-settings',
      icon: 'settings',
    },
    {
      name: 'Log Out',
      routerLink: 'log-out',
      icon: 'logout',
    },
  ];
}
