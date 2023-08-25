import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveKursDialogComponent } from './remove-kurs-dialog.component';

describe('RemoveKursDialogComponent', () => {
  let component: RemoveKursDialogComponent;
  let fixture: ComponentFixture<RemoveKursDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveKursDialogComponent]
    });
    fixture = TestBed.createComponent(RemoveKursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
