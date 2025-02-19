import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetarPage } from './retar.page';

describe('RetarPage', () => {
  let component: RetarPage;
  let fixture: ComponentFixture<RetarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RetarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
