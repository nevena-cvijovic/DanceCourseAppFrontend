import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurseviComponent } from './kursevi.component';

describe('KurseviComponent', () => {
  let component: KurseviComponent;
  let fixture: ComponentFixture<KurseviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurseviComponent]
    });
    fixture = TestBed.createComponent(KurseviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
