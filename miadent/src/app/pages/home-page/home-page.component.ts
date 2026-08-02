import { Component, Signal, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectCurrentLanguage } from '../../store/settings/settings.feature';
import { Language } from '../../shared/enums/language.enum';

interface HomePageFeature {
  icon: 'tooth' | 'shield' | 'technology' | 'heart';
  label: string;
}

interface HomePageContent {
  badge: string;
  titleStart: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  leftImageAlt: string;
  rightImageAlt: string;
  features: HomePageFeature[];
}

@Component({
  selector: 'mia-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  private readonly store: Store = inject(Store);

  protected readonly currentLanguage: Signal<Language> =
    this.store.selectSignal(selectCurrentLanguage);

  protected readonly content: Signal<HomePageContent> = computed(
    (): HomePageContent => this.translations[this.currentLanguage()]
  );

  private readonly translations: Record<Language, HomePageContent> = {
    [Language.Bulgarian]: {
      badge: 'Грижа с усмивка',
      titleStart: 'Нека се погрижим',
      titleAccent: 'за вашите зъби',
      description:
        'Модерна, комфортна и персонализирана грижа за вашите зъби, поднесена с топлота!',
      primaryCta: 'Запази час',
      secondaryCta: 'Научи повече',
      leftImageAlt: 'Д-р Миа показва детска рисунка с усмивка.',
      rightImageAlt: 'Д-р Миа се усмихва и поздравява с розови ръкавици.',
      features: [
        { icon: 'tooth', label: 'Индивидуален подход' },
        { icon: 'shield', label: 'Сигурност и професионализъм' },
        { icon: 'technology', label: 'Модерни технологии' },
        { icon: 'heart', label: 'Грижа и внимание' }
      ]
    },
    [Language.English]: {
      badge: 'Care with a smile',
      titleStart: "Let's take care",
      titleAccent: 'of your teeth',
      description:
        'Modern, comfortable, and personalized dental care delivered with warmth.',
      primaryCta: 'Book now',
      secondaryCta: 'Learn more',
      leftImageAlt: 'Dr. Mia holding a child drawing and smiling.',
      rightImageAlt: 'Dr. Mia smiling and greeting with pink gloves.',
      features: [
        { icon: 'tooth', label: 'Personal approach' },
        { icon: 'shield', label: 'Safety and professionalism' },
        { icon: 'technology', label: 'Modern technology' },
        { icon: 'heart', label: 'Care and attention' }
      ]
    }
  };
}
