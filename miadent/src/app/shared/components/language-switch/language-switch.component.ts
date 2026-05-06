import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Language } from '../../enums/language.enum';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { SettingsActions } from '../../../store/settings/settings.actions';
import { selectCurrentLanguage } from '../../../store/settings/settings.feature';
import { BulgarianFlagComponent } from '../bulgarian-flag/bulgarian-flag.component';
import { EnglishFlagComponent } from '../english-flag/english-flag.component';

@Component({
  selector: 'mia-language-switch',
  imports: [BulgarianFlagComponent, EnglishFlagComponent, TranslatePipe],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent {
  private readonly store: Store = inject(Store);

  protected readonly currentLanguage: Signal<Language> = toSignal(
    this.store.select(selectCurrentLanguage),
    { requireSync: true }
  );

  protected isEnglish(): boolean {
    return this.currentLanguage() === Language.English;
  }

  protected isBulgarian(): boolean {
    return this.currentLanguage() === Language.Bulgarian;
  }

  protected translateToBulgarian(): void {
    this.store.dispatch(SettingsActions.setLanguage({ language: Language.Bulgarian }));
  }

  protected translateToEnglish(): void {
    this.store.dispatch(SettingsActions.setLanguage({ language: Language.English }));
  }
}
