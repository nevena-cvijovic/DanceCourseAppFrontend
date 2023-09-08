import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoKreiranNalogDialogComponent } from './uspesno-kreiran-nalog-dialog.component';

describe('UspesnoKreiranNalogDialogComponent', () => {
  let component: UspesnoKreiranNalogDialogComponent;
  let fixture: ComponentFixture<UspesnoKreiranNalogDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoKreiranNalogDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoKreiranNalogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
