import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OhmsLawPage } from './ohms-law.page';

describe('OhmsLawPage', () => {
  let component: OhmsLawPage;
  let fixture: ComponentFixture<OhmsLawPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OhmsLawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
