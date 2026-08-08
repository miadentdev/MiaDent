import { Language } from "../../../shared/enums/language.enum";
import { HomePageContent } from "../models/home-page-content.model";

  export const HOME_PAGE_TRANSLATIONS: Record<Language, HomePageContent> = {
    [Language.Bulgarian]: {
      city: 'област София',
      address: 'Божурище, пл Първи май 1, ет. 2, каб. 14',
      cabinet: 'етаж. 2, кабинет: 14',
      phone: '+359 879540407',
      email: 'miadent.bozhurishte@gmail.com',
      workingHours: 'Работно време: Понеделник - Петък 10:00 - 18:00',
      titleStart: 'Нека се погрижим',
      titleAccent: 'за усмивката Ви!',
      description:
        'Безболезнена, внимателна и съвременна грижа за вашите зъби, поднесена с топлота!',
      primaryCta: 'Запази час',
      secondaryCta: 'Научи повече',
      leftImageAlt: 'Д-р Миа показва детска рисунка с усмивка.',
      rightImageAlt: 'Д-р Миа се усмихва и поздравява с розови ръкавици.',
      features: [
        { icon: 'fa-tooth', label: 'Индивидуален подход' },
        { icon: 'fa-shield-halved', label: 'Сигурност и професионализъм' },
        { icon: 'fa-microchip', label: 'Модерни технологии' },
        { icon: 'fa-heart', label: 'Отговорност и внимание' }
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
        { icon: 'fa-tooth', label: 'Personal approach' },
        { icon: 'fa-shield-halved', label: 'Safety and professionalism' },
        { icon: 'fa-microchip', label: 'Modern technology' },
        { icon: 'fa-heart', label: 'Responsibility and attention' }
      ]
    }
  };