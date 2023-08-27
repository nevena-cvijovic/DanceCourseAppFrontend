import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlesoviComponent } from './plesovi.component';

describe('PlesoviComponent', () => {
  let component: PlesoviComponent;
  let fixture: ComponentFixture<PlesoviComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlesoviComponent]
    });
    fixture = TestBed.createComponent(PlesoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
