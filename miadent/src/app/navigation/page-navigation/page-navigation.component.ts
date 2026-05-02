import { Component } from '@angular/core';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'mia-page-navigation',
  imports: [NavigationLinkComponent],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.css',
})
export class PageNavigationComponent {
  protected links = ['Home', 'Services', 'Contact Me'];
}
