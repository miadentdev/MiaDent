import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public translate(key: string): string {
    // Placeholder translation logic
    return key;
  }
}
