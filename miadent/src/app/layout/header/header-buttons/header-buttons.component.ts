import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { BulgarianFlagComponent } from '../../../shared/components/bulgarian-flag/bulgarian-flag.component';
import { EnglishFlagComponent } from '../../../shared/components/english-flag/english-flag.component';
import { Language } from '../../../shared/enums/language.enum';
import { LanguageActions } from '../../../store/language/language.actions';
import { selectCurrentLanguage } from '../../../store/language/language.feature';

@Component({
  selector: 'mia-header-buttons',
  imports: [BulgarianFlagComponent, EnglishFlagComponent],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.css',
})
export class HeaderButtonsComponent {
  private store = inject(Store);

  protected currentLanguage = toSignal(this.store.select(selectCurrentLanguage), {
    requireSync: true,
  });

  protected isEnEnglish(): boolean {
    return this.currentLanguage() === Language.English;
  }

  protected isBulgarian(): boolean {
    return this.currentLanguage() === Language.Bulgarian;
  }

  protected translateToBulgarian() {
    this.store.dispatch(LanguageActions.setLanguage({ language: Language.Bulgarian }));
  }

  protected translateToEnglish() {
    this.store.dispatch(LanguageActions.setLanguage({ language: Language.English }));
  }
}
