import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboadingPage } from './onboading.page';

describe('OnboadingPage', () => {
  let component: OnboadingPage;
  let fixture: ComponentFixture<OnboadingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
