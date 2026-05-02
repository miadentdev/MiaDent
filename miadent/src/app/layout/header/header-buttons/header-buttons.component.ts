import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { BulgarianFlagComponent } from '../../../shared/components/bulgarian-flag/bulgarian-flag.component';
import { EnglishFlagComponent } from '../../../shared/components/english-flag/english-flag.component';
import { Language } from '../../../shared/enums/language.enum';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { SettingsActions } from '../../../store/settings/settings.actions';
import { selectCurrentLanguage } from '../../../store/settings/settings.feature';

@Component({
  selector: 'mia-header-buttons',
  imports: [BulgarianFlagComponent, EnglishFlagComponent, TranslatePipe],
  templateUrl: './header-buttons.component.html',
  styleUrl: './header-buttons.component.css'
})
export class HeaderButtonsComponent {
  private readonly store: Store = inject(Store);

  protected readonly currentLanguage: Signal<Language> = toSignal(
    this.store.select(selectCurrentLanguage),
    { requireSync: true }
  );

  protected isEnEnglish(): boolean {
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
