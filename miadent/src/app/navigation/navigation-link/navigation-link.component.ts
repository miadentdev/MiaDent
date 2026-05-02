import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'mia-navigation-link',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.css',
})
export class NavigationLinkComponent {
  public readonly slug: InputSignal<string> = input.required<string>();
  public readonly label: InputSignal<string> = input.required<string>();

  protected readonly route: Signal<string> = computed(
    (): string => `/${this.slug().toLowerCase()}`,
  );
}
