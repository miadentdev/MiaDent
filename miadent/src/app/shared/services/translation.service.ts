import { Injectable, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Language } from '../enums/language.enum';

import { bgTranslation } from '../translations/bg.translations';
import { enTranslation } from '../translations/en.translation';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly store = inject(Store);

  private readonly currentLanguage = this.store.selectSignal<Language>(
    (state) => state.settings.currentLanguage,
  );

  private readonly translations = {
    [Language.English]: enTranslation,
    [Language.Bulgarian]: bgTranslation,
  };

  private readonly currentTranslations = computed(() => {
    return this.translations[this.currentLanguage()];
  });

  public translate(path: string): string {
    const keys = path.split('.');

    let value: any = this.currentTranslations();

    for (const key of keys) {
      value = value?.[key];
    }

    return value ?? path;
  }
}
