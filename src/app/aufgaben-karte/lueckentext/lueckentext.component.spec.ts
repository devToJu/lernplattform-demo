import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LueckentextComponent } from './lueckentext.component';

describe('LueckentextComponent', () => {
  let component: LueckentextComponent;
  let fixture: ComponentFixture<LueckentextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LueckentextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LueckentextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
