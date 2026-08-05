import { Component, Signal, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { BadgeComponent } from '../../shared/components/badge/badge-component';
import { Language } from '../../shared/enums/language.enum';
import { selectCurrentLanguage } from '../../store/settings/settings.feature';
import { HomePageContent } from './models/home-page-content.model';
import { HOME_PAGE_TRANSLATIONS } from './translations/home-page.translation';

@Component({
  selector: 'mia-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [BadgeComponent]
})
export class HomePageComponent {
  private readonly store: Store = inject(Store);

  protected readonly currentLanguage: Signal<Language> =
    this.store.selectSignal(selectCurrentLanguage);

  protected readonly content: Signal<HomePageContent> = computed(
    (): HomePageContent => HOME_PAGE_TRANSLATIONS[this.currentLanguage()]
  );
}
