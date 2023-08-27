import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlesDialogComponent } from './add-ples-dialog.component';

describe('AddPlesDialogComponent', () => {
  let component: AddPlesDialogComponent;
  let fixture: ComponentFixture<AddPlesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlesDialogComponent]
    });
    fixture = TestBed.createComponent(AddPlesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
