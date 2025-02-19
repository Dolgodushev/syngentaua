import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerbPage } from './herb.page';

describe('HerbPage', () => {
  let component: HerbPage;
  let fixture: ComponentFixture<HerbPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
