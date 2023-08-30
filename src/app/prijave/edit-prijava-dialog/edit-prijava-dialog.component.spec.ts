import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrijavaDialogComponent } from './edit-prijava-dialog.component';

describe('EditPrijavaDialogComponent', () => {
  let component: EditPrijavaDialogComponent;
  let fixture: ComponentFixture<EditPrijavaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPrijavaDialogComponent]
    });
    fixture = TestBed.createComponent(EditPrijavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
