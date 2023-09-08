import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoDodataGrupaDialogComponent } from './uspesno-dodata-grupa-dialog.component';

describe('UspesnoDodataGrupaDialogComponent', () => {
  let component: UspesnoDodataGrupaDialogComponent;
  let fixture: ComponentFixture<UspesnoDodataGrupaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoDodataGrupaDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoDodataGrupaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
