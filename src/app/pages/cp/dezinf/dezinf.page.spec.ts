import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DezinfPage } from './dezinf.page';

describe('DezinfPage', () => {
  let component: DezinfPage;
  let fixture: ComponentFixture<DezinfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DezinfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
