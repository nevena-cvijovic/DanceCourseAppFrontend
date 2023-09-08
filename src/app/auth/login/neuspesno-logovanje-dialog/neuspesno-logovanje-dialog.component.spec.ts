import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoLogovanjeDialogComponent } from './neuspesno-logovanje-dialog.component';

describe('NeuspesnoLogovanjeDialogComponent', () => {
  let component: NeuspesnoLogovanjeDialogComponent;
  let fixture: ComponentFixture<NeuspesnoLogovanjeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoLogovanjeDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoLogovanjeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
