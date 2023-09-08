import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKorisnikComponent } from './home-korisnik.component';

describe('HomeKorisnikComponent', () => {
  let component: HomeKorisnikComponent;
  let fixture: ComponentFixture<HomeKorisnikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeKorisnikComponent]
    });
    fixture = TestBed.createComponent(HomeKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
