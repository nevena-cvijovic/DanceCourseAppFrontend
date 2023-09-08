import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoObrisanKursDialogComponent } from './uspesno-obrisan-kurs-dialog.component';

describe('UspesnoObrisanKursDialogComponent', () => {
  let component: UspesnoObrisanKursDialogComponent;
  let fixture: ComponentFixture<UspesnoObrisanKursDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoObrisanKursDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoObrisanKursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
