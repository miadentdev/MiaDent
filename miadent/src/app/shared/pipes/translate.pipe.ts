import { Pipe, PipeTransform, inject } from '@angular/core';

import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService: TranslationService = inject(TranslationService);

  public transform(key: string): string {
    return this.translationService.translate(key);
  }
}
