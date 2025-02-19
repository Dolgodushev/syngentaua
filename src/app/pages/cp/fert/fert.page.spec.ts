import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertPage } from './fert.page';

describe('FertPage', () => {
  let component: FertPage;
  let fixture: ComponentFixture<FertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
