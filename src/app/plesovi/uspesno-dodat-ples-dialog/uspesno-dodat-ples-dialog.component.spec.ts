import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnoDodatPlesDialogComponent } from './uspesno-dodat-ples-dialog.component';

describe('UspesnoDodatPlesDialogComponent', () => {
  let component: UspesnoDodatPlesDialogComponent;
  let fixture: ComponentFixture<UspesnoDodatPlesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UspesnoDodatPlesDialogComponent]
    });
    fixture = TestBed.createComponent(UspesnoDodatPlesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
