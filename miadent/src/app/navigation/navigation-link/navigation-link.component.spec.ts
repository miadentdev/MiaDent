import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLinkComponent } from './navigation-link.component';

describe('NavigationLinkComponent', () => {
  let component: NavigationLinkComponent;
  let fixture: ComponentFixture<NavigationLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationLinkComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
