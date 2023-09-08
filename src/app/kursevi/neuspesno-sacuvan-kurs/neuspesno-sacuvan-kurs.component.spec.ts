import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoSacuvanKursComponent } from './neuspesno-sacuvan-kurs.component';

describe('NeuspesnoSacuvanKursComponent', () => {
  let component: NeuspesnoSacuvanKursComponent;
  let fixture: ComponentFixture<NeuspesnoSacuvanKursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoSacuvanKursComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoSacuvanKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
