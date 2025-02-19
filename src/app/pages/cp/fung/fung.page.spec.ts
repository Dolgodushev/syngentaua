import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FungPage } from './fung.page';

describe('FungPage', () => {
  let component: FungPage;
  let fixture: ComponentFixture<FungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
