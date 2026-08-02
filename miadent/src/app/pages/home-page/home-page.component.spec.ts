import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';

import { settingsFeature } from '../../store/settings/settings.feature';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', (): void => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [
        provideRouter([]),
        provideStore({
          [settingsFeature.name]: settingsFeature.reducer
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
