import { Component, Signal, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { Language } from '../../shared/enums/language.enum';
import { selectCurrentLanguage } from '../../store/settings/settings.feature';

interface HomePageFeature {
  icon: 'tooth' | 'shield' | 'technology' | 'heart';
  label: string;
}

interface HomePageContent {
  city: string;
  address: string;
  cabinet: string;
  phone: string;
  email: string;
  workingHours: string;
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

  protected isContactMenuOpen: boolean = false;

  private readonly translations: Record<Language, HomePageContent> = {
    [Language.Bulgarian]: {
      city: 'област София',
      address: 'Божурище, пл Първи май 1, ет. 2, каб. 14',
      cabinet: 'етаж. 2, кабинет: 14',
      phone: '0879540407',
      email: 'miadent.bozhurishte@gmail.com',
      workingHours: 'Работно време: Понеделник - Петък 10:00 - 18:00',
      titleStart: 'Нека се погрижим',
      titleAccent: 'за усмивка Ви!',
      description:
        'Безболезнена, внимателна и съвременна грижа за вашите зъби, поднесена с топлота!',
      primaryCta: 'Запази час',
      secondaryCta: 'Научи повече',
      leftImageAlt: 'Д-р Миа показва детска рисунка с усмивка.',
      rightImageAlt: 'Д-р Миа се усмихва и поздравява с розови ръкавици.',
      features: [
        { icon: 'tooth', label: 'Индивидуален подход' },
        { icon: 'shield', label: 'Сигурност и професионализъм' },
        { icon: 'technology', label: 'Модерни технологии' },
        { icon: 'heart', label: 'Отговорност и внимание' }
      ]
    },
    [Language.English]: {
      city: 'Bozhurishte, Sofia region',
      address: 'Bozhurishte, pl. "First of May" 1, 2nd floor, office: 14',
      cabinet: '2nd floor, office: 14',
      phone: '+359879540407',
      email: 'miadent.bozhurishte@gmail.com',
      workingHours: 'Working hours: Monday - Friday 10:00 - 18:00',
      titleStart: "Let's take care",
      titleAccent: 'of your smile!',
      description: 'Painless, comfortable, and modern dental care delivered with warmth.',
      primaryCta: 'Book now',
      secondaryCta: 'Learn more',
      leftImageAlt: 'Dr. Mia holding a child drawing and smiling.',
      rightImageAlt: 'Dr. Mia smiling and greeting with pink gloves.',
      features: [
        { icon: 'tooth', label: 'Personal approach' },
        { icon: 'shield', label: 'Safety and professionalism' },
        { icon: 'technology', label: 'Modern technology' },
        { icon: 'heart', label: 'Responsibility and attention' }
      ]
    }
  };

  protected openContactMenu(): void {
    this.isContactMenuOpen = !this.isContactMenuOpen;
  }

  protected closeContactMenu(): void {
    this.isContactMenuOpen = false;
  }
}
