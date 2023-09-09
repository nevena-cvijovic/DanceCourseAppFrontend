import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuspesnoDodatPlesDialogComponent } from './neuspesno-dodat-ples-dialog.component';

describe('NeuspesnoDodatPlesDialogComponent', () => {
  let component: NeuspesnoDodatPlesDialogComponent;
  let fixture: ComponentFixture<NeuspesnoDodatPlesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuspesnoDodatPlesDialogComponent]
    });
    fixture = TestBed.createComponent(NeuspesnoDodatPlesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
