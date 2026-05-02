import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mia-navigation-link',
  imports: [RouterModule],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.css',
})
export class NavigationLinkComponent {
  // Signal input for the link label
  name = input<string>();

  // Optional: route path derived from name
  // You can replace this with a proper input if needed
  get route(): string {
    return `/${this.name()?.toLowerCase() ?? ''}`;
  }
}
