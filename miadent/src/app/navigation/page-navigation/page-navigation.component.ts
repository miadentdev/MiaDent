import { Component } from '@angular/core';
import { NavigationLink } from '../models/navigation-link.model';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'mia-page-navigation',
  imports: [NavigationLinkComponent],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.css',
})
export class PageNavigationComponent {
  protected readonly links: NavigationLink[] = [
    { slug: 'home', label: 'Home' },
    { slug: 'about', label: 'About' },
    { slug: 'services', label: 'Services' },
    { slug: 'contact', label: 'Contact' },
  ];
}
