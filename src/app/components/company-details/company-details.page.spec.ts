import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsPage } from './company-details.page';

describe('CompanyDetailsPage', () => {
  let component: CompanyDetailsPage;
  let fixture: ComponentFixture<CompanyDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
