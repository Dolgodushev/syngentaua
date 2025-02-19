import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpPage } from './cp.page';

describe('CpPage', () => {
  let component: CpPage;
  let fixture: ComponentFixture<CpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
