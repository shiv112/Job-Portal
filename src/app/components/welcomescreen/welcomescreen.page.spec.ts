import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomescreenPage } from './welcomescreen.page';

describe('WelcomescreenPage', () => {
  let component: WelcomescreenPage;
  let fixture: ComponentFixture<WelcomescreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomescreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
