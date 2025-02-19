import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsectPage } from './insect.page';

describe('InsectPage', () => {
  let component: InsectPage;
  let fixture: ComponentFixture<InsectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
