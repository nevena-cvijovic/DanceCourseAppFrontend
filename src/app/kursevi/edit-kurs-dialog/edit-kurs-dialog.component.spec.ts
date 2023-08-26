import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKursDialogComponent } from './edit-kurs-dialog.component';

describe('EditKursDialogComponent', () => {
  let component: EditKursDialogComponent;
  let fixture: ComponentFixture<EditKursDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditKursDialogComponent]
    });
    fixture = TestBed.createComponent(EditKursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
