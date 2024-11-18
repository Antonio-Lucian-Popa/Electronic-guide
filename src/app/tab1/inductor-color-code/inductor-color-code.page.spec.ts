import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InductorColorCodePage } from './inductor-color-code.page';

describe('InductorColorCodePage', () => {
  let component: InductorColorCodePage;
  let fixture: ComponentFixture<InductorColorCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InductorColorCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
