import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoKreiranaPrijavaDialogComponent } from './neuspesno-kreirana-prijava-dialog.component';

describe('NeuspesnoKreiranaPrijavaDialogComponent', () => {
  let component: NeuspesnoKreiranaPrijavaDialogComponent;
  let fixture: ComponentFixture<NeuspesnoKreiranaPrijavaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoKreiranaPrijavaDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoKreiranaPrijavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
