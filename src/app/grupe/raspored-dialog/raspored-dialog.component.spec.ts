import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasporedDialogComponent } from './raspored-dialog.component';

describe('RasporedDialogComponent', () => {
  let component: RasporedDialogComponent;
  let fixture: ComponentFixture<RasporedDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RasporedDialogComponent]
    });
    fixture = TestBed.createComponent(RasporedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
