import { Component } from '@angular/core';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'mia-page-navigation',
  imports: [NavigationLinkComponent],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.css',
})
export class PageNavigationComponent {
  protected links = [
    { slug: 'home', label: 'Home' },
    { slug: 'services', label: 'Services' },
    { slug: 'contact', label: 'Contact Me' },
    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },

    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },
    { slug: 'about', label: 'About Me' },
  ];
}
