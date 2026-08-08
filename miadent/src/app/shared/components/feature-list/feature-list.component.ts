import { Component, input, InputSignal } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'mia-feature-list',
  imports: [],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {
  public features: InputSignal<Feature[]> = input([
    { icon: 'fa-tooth', label: 'Индивидуален подход' },
    { icon: 'fa-shield-halved', label: 'Сигурност и професионализъм' },
    { icon: 'fa-microchip', label: 'Модерни технологии' },
    { icon: 'fa-heart', label: 'Отговорност и внимание' }
  ]);
}
