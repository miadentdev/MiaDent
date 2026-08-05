import { HomePageFeature } from './home-page-feature.model';

export interface HomePageContent {
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
