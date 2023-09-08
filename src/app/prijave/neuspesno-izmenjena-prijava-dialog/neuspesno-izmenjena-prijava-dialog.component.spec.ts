import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoIzmenjenaPrijavaDialogComponent } from './neuspesno-izmenjena-prijava-dialog.component';

describe('NeuspesnoIzmenjenaPrijavaDialogComponent', () => {
  let component: NeuspesnoIzmenjenaPrijavaDialogComponent;
  let fixture: ComponentFixture<NeuspesnoIzmenjenaPrijavaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoIzmenjenaPrijavaDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoIzmenjenaPrijavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
