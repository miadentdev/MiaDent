import { createActionGroup, props } from '@ngrx/store';
import { Language } from '../../shared/enums/language.enum';

export const SettingsActions = createActionGroup({
  source: 'Settings',
  events: {
    'Set Language': props<{ language: Language }>(),
  },
});
