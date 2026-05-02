import { createFeature, createReducer, on } from '@ngrx/store';
import { Language } from '../../shared/enums/language.enum';
import { LanguageActions } from './language.actions';

export interface LanguageState {
  currentLanguage: Language;
}

export const initialLanguageState: LanguageState = {
  currentLanguage: Language.English,
};

export const languageFeature = createFeature({
  name: 'language',
  reducer: createReducer(
    initialLanguageState,
    on(LanguageActions.setLanguage, (state, { language }) => ({
      ...state,
      currentLanguage: language,
    })),
  ),
});

export const { selectCurrentLanguage } = languageFeature;
