import { Component, HostListener, signal, WritableSignal } from '@angular/core';
import { HeaderButtonsComponent } from '../../layout/header/header-buttons/header-buttons.component';
import { LanguageSwitchComponent } from '../../shared/components/language-switch/language-switch.component';
import { desktopWidthBreakpoint } from '../constants/window-size.const';
import { NavigationLink } from '../models/navigation-link.model';
import { NavigationLinkComponent } from '../navigation-link/navigation-link.component';

@Component({
  selector: 'mia-page-navigation',
  imports: [NavigationLinkComponent, HeaderButtonsComponent, LanguageSwitchComponent],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.scss'
})
export class PageNavigationComponent {
  protected readonly links: NavigationLink[] = [
    { slug: 'home', label: 'navigation.home' },
    { slug: 'about', label: 'navigation.about' },
    { slug: 'services', label: 'navigation.services' },
    { slug: 'contact', label: 'navigation.contact' }
  ];

  protected readonly isDesktop: WritableSignal<boolean> = signal<boolean>(
    window.innerWidth >= desktopWidthBreakpoint
  );

  protected readonly isMenuOpen: WritableSignal<boolean> = signal<boolean>(false);

  @HostListener('window:resize')
  protected onResize(): void {
    this.isDesktop.set(window.innerWidth >= desktopWidthBreakpoint);
    if (this.isDesktop()) {
      this.isMenuOpen.set(false);
    }
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open: boolean): boolean => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
