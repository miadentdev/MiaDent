import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mia-navigation-link',
  imports: [RouterModule],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.css',
})
export class NavigationLinkComponent {
  public readonly slug: InputSignal<string | undefined> = input<string>();
  public readonly label: InputSignal<string | undefined> = input<string>();

  protected readonly route: Signal<string> = computed(
    (): string => `/${this.slug()?.toLowerCase() ?? ''}`,
  );
}
