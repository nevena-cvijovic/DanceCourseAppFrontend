import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKursDialogComponent } from './add-kurs-dialog.component';

describe('AddKursDialogComponent', () => {
  let component: AddKursDialogComponent;
  let fixture: ComponentFixture<AddKursDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKursDialogComponent]
    });
    fixture = TestBed.createComponent(AddKursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
