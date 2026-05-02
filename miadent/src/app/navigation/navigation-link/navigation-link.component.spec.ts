import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLinkComponent } from './navigation-link.component';

describe('NavigationLinkComponent', (): void => {
  let component: NavigationLinkComponent;
  let fixture: ComponentFixture<NavigationLinkComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NavigationLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationLinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
