import { Component, signal, WritableSignal } from '@angular/core';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'mia-root',
  imports: [HeaderComponent, FooterComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title: WritableSignal<string> = signal('miadent');
}
