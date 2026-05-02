import { createActionGroup, props } from '@ngrx/store';
import { Language } from '../../shared/enums/language.enum';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    'Set Language': props<{ language: Language }>(),
  },
});
