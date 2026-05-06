import { Component, HostListener, signal, WritableSignal } from '@angular/core';
import { PageNavigationComponent } from '../../navigation/page-navigation/page-navigation.component';
import { LogoComponent } from '../logo/logo.component';
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';

@Component({
  selector: 'mia-header',
  imports: [LogoComponent, PageNavigationComponent, HeaderButtonsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly isDesktop: WritableSignal<boolean> = signal<boolean>(
    window.innerWidth >= 1170
  );

  @HostListener('window:resize')
  protected onResize(): void {
    this.isDesktop.set(window.innerWidth >= 1170);
  }
}
