import { Component, HostListener, signal, WritableSignal } from '@angular/core';
import { NavigationLink } from '../models/navigation-link.model';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'mia-page-navigation',
  imports: [NavigationLinkComponent],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.css'
})
export class PageNavigationComponent {
  protected readonly links: NavigationLink[] = [
    { slug: 'home', label: 'navigation.home' },
    { slug: 'about', label: 'navigation.about' },
    { slug: 'services', label: 'navigation.services' },
    { slug: 'contact', label: 'navigation.contact' }
  ];

  protected readonly isDesktop: WritableSignal<boolean> = signal<boolean>(
    window.innerWidth >= 1170
  );

  @HostListener('window:resize')
  protected onResize(): void {
    this.isDesktop.set(window.innerWidth >= 1170);
  }
}
