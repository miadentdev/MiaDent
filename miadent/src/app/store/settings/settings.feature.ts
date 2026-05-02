import { createFeature, createReducer, on } from '@ngrx/store';
import { Language } from '../../shared/enums/language.enum';
import { SettingsActions } from './settings.actions';

export interface SettingsState {
  currentLanguage: Language;
}

export const initialSettingsState: SettingsState = {
  currentLanguage: Language.Bulgarian
};

export const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialSettingsState,
    on(
      SettingsActions.setLanguage,
      (state: SettingsState, { language }: { language: Language }): SettingsState => ({
        ...state,
        currentLanguage: language
      })
    )
  )
});

export const { selectCurrentLanguage } = settingsFeature;
