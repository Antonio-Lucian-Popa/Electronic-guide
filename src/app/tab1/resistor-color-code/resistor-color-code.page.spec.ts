import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResistorColorCodePage } from './resistor-color-code.page';

describe('ResistorColorCodePage', () => {
  let component: ResistorColorCodePage;
  let fixture: ComponentFixture<ResistorColorCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorColorCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
