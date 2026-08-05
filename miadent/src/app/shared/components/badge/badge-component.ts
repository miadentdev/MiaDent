import { Component, computed, input, InputSignal, Signal } from '@angular/core';

@Component({
  selector: 'mia-badge',
  imports: [],
  templateUrl: './badge-component.html',
  styleUrl: './badge-component.scss'
})
export class BadgeComponent {
  public content: InputSignal<string> = input('Default content');
  public icon: InputSignal<string> = input('fa-tooth');
  protected iconClass: Signal<string> = computed((): string => `fa-solid ${this.icon()}`);
}
