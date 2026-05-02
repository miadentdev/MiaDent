import { Component } from '@angular/core';
import { Language } from '../../../shared/enums/language.enum';

@Component({
  selector: 'mia-header-buttons',
  imports: [],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.css',
})
export class HeaderButtonsComponent {
  protected currentLanguage: Language = Language.English;

  protected isEnEnglish(): boolean {
    return this.currentLanguage === Language.English;
  }

  protected isBulgarian(): boolean {
    return this.currentLanguage === Language.Bulgarian;
  }

  protected translateToBulgarian() {
    // This is a placeholder function. You can implement the actual translation logic here.
    alert('This will translate the content to Bulgarian!');
  }

  protected translateToEnglish() {
    // This is a placeholder function. You can implement the actual translation logic here.
    alert('This will translate the content to English!');
  }
}
