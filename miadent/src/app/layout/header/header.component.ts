import { Component } from '@angular/core';
import { PageNavigationComponent } from '../../navigation/page-navigation/page-navigation.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'mia-header',
  imports: [LogoComponent, PageNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
