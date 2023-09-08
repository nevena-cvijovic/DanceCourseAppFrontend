import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrijavaDialogComponent } from './add-prijava-dialog.component';

describe('AddPrijavaDialogComponent', () => {
  let component: AddPrijavaDialogComponent;
  let fixture: ComponentFixture<AddPrijavaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPrijavaDialogComponent]
    });
    fixture = TestBed.createComponent(AddPrijavaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
