import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoKreiranNalogDialogComponent } from './neuspesno-kreiran-nalog-dialog.component';

describe('NeuspesnoKreiranNalogDialogComponent', () => {
  let component: NeuspesnoKreiranNalogDialogComponent;
  let fixture: ComponentFixture<NeuspesnoKreiranNalogDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoKreiranNalogDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoKreiranNalogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
