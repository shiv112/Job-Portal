import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageDetailPage } from './message-detail.page';

describe('MessageDetailPage', () => {
  let component: MessageDetailPage;
  let fixture: ComponentFixture<MessageDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
