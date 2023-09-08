import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoObrisanKursDialogComponent } from './neuspesno-obrisan-kurs-dialog.component';

describe('NeuspesnoObrisanKursDialogComponent', () => {
  let component: NeuspesnoObrisanKursDialogComponent;
  let fixture: ComponentFixture<NeuspesnoObrisanKursDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoObrisanKursDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoObrisanKursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
