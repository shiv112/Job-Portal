import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyFormPage } from './apply-form.page';

describe('ApplyFormPage', () => {
  let component: ApplyFormPage;
  let fixture: ComponentFixture<ApplyFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
