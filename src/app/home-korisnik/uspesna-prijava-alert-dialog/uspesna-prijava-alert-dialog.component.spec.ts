import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnaPrijavaAlertDialogComponent } from './uspesna-prijava-alert-dialog.component';

describe('UspesnaPrijavaAlertDialogComponent', () => {
  let component: UspesnaPrijavaAlertDialogComponent;
  let fixture: ComponentFixture<UspesnaPrijavaAlertDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnaPrijavaAlertDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnaPrijavaAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
