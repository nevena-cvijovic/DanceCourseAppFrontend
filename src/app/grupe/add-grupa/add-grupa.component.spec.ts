import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrupaComponent } from './add-grupa.component';

describe('AddGrupaComponent', () => {
  let component: AddGrupaComponent;
  let fixture: ComponentFixture<AddGrupaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGrupaComponent]
    });
    fixture = TestBed.createComponent(AddGrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
