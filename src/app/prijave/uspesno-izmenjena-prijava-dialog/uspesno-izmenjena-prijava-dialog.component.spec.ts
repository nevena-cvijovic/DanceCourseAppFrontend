import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoIzmenjenaPrijavaDialogComponent } from './uspesno-izmenjena-prijava-dialog.component';

describe('UspesnoIzmenjenaPrijavaDialogComponent', () => {
  let component: UspesnoIzmenjenaPrijavaDialogComponent;
  let fixture: ComponentFixture<UspesnoIzmenjenaPrijavaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoIzmenjenaPrijavaDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoIzmenjenaPrijavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
