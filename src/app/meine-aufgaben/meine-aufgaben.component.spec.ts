import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineAufgabenComponent } from './meine-aufgaben.component';

describe('MeineAufgabenComponent', () => {
  let component: MeineAufgabenComponent;
  let fixture: ComponentFixture<MeineAufgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeineAufgabenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineAufgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
