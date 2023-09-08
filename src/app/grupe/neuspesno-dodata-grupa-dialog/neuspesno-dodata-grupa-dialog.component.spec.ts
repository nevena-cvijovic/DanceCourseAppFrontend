import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoDodataGrupaDialogComponent } from './neuspesno-dodata-grupa-dialog.component';

describe('NeuspesnoDodataGrupaDialogComponent', () => {
  let component: NeuspesnoDodataGrupaDialogComponent;
  let fixture: ComponentFixture<NeuspesnoDodataGrupaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoDodataGrupaDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoDodataGrupaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
