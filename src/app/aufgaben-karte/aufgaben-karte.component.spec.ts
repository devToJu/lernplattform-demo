import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenKarteComponent } from './aufgaben-karte.component';

describe('AufgabenKarteComponent', () => {
  let component: AufgabenKarteComponent;
  let fixture: ComponentFixture<AufgabenKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabenKarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AufgabenKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
