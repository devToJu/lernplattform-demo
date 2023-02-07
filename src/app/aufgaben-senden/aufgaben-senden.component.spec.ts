import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenSendenComponent } from './aufgaben-senden.component';

describe('AufgabenSendenComponent', () => {
  let component: AufgabenSendenComponent;
  let fixture: ComponentFixture<AufgabenSendenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabenSendenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AufgabenSendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
