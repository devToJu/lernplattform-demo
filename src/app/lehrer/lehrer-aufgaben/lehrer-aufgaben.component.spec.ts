import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LehrerAufgabenComponent } from './lehrer-aufgaben.component';

describe('LehrerAufgabenComponent', () => {
  let component: LehrerAufgabenComponent;
  let fixture: ComponentFixture<LehrerAufgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LehrerAufgabenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LehrerAufgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
