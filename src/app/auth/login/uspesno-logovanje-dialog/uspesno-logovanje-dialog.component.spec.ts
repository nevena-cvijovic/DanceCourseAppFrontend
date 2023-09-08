import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoLogovanjeDialogComponent } from './uspesno-logovanje-dialog.component';

describe('UspesnoLogovanjeDialogComponent', () => {
  let component: UspesnoLogovanjeDialogComponent;
  let fixture: ComponentFixture<UspesnoLogovanjeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoLogovanjeDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoLogovanjeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
