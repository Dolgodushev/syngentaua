import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodentPage } from './rodent.page';

describe('RodentPage', () => {
  let component: RodentPage;
  let fixture: ComponentFixture<RodentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RodentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
