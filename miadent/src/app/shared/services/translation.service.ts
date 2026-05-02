import { Injectable, Signal, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCurrentLanguage } from '../../store/settings/settings.feature';
import { Language } from '../enums/language.enum';
import { TranslationModel } from '../models/translation.model';
import { bgTranslation } from '../translations/bg.translations';
import { enTranslation } from '../translations/en.translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly store: Store = inject(Store);

  private readonly currentLanguage: Signal<Language> =
    this.store.selectSignal(selectCurrentLanguage);

  private readonly translations: Record<Language, TranslationModel> = {
    [Language.English]: enTranslation,
    [Language.Bulgarian]: bgTranslation,
  };

  private readonly currentTranslations: Signal<TranslationModel> = computed(
    (): TranslationModel => this.translations[this.currentLanguage()],
  );

  public translate(path: string): string {
    const keys: string[] = path.split('.');
    let value: unknown = this.currentTranslations();

    for (const key of keys) {
      if (value !== null && typeof value === 'object' && key in value) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }

    return typeof value === 'string' ? value : path;
  }
}
