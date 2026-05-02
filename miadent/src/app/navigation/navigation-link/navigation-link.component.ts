import { Component, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'mia-navigation-link',
  imports: [RouterModule],
  templateUrl: './navigation-link.component.html',
  styleUrl: './navigation-link.component.css',
})
export class NavigationLinkComponent {
  private router = inject(Router);

  name = input<string>();

  protected navigate(): void {
    this.router.navigateByUrl(`/${this.name()?.toLowerCase() ?? ''}`);
  }
}
