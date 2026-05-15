import { Component, HostListener, signal, WritableSignal } from '@angular/core';
import { PageNavigationComponent } from '../../navigation/page-navigation/page-navigation.component';
import { LogoComponent } from '../logo/logo.component';
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';
import { desktopWidthBreakpoint } from '../../navigation/constants/window-size.const';

@Component({
  selector: 'mia-header',
  imports: [LogoComponent, PageNavigationComponent, HeaderButtonsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly isDesktop: WritableSignal<boolean> = signal<boolean>(
    window.innerWidth >= desktopWidthBreakpoint
  );

  @HostListener('window:resize')
  protected onResize(): void {
    this.isDesktop.set(window.innerWidth >= desktopWidthBreakpoint);
  }
}
