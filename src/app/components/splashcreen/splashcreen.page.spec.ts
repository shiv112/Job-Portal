import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashcreenPage } from './splashcreen.page';

describe('SplashcreenPage', () => {
  let component: SplashcreenPage;
  let fixture: ComponentFixture<SplashcreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashcreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
