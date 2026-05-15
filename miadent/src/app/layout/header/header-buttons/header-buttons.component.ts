import { Component, input, InputSignal } from '@angular/core';
import { LanguageSwitchComponent } from '../../../shared/components/language-switch/language-switch.component';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'mia-header-buttons',
  imports: [LanguageSwitchComponent, TranslatePipe],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.scss'
})
export class HeaderButtonsComponent {
  public readonly showLanguageSwitch: InputSignal<boolean> = input<boolean>(true);
}
