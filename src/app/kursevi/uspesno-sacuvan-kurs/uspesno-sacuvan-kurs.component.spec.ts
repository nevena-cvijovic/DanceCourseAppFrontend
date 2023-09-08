import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoSacuvanKursComponent } from './uspesno-sacuvan-kurs.component';

describe('UspesnoSacuvanKursComponent', () => {
  let component: UspesnoSacuvanKursComponent;
  let fixture: ComponentFixture<UspesnoSacuvanKursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoSacuvanKursComponent]
    });
    fixture = TestBed.createComponent(UspesnoSacuvanKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
