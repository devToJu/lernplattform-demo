import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendenErfolgreichComponent } from './senden-erfolgreich.component';

describe('SendenErfolgreichComponent', () => {
  let component: SendenErfolgreichComponent;
  let fixture: ComponentFixture<SendenErfolgreichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendenErfolgreichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendenErfolgreichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
