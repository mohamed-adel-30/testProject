import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ay7agaComponent } from './ay7aga.component';

describe('Ay7agaComponent', () => {
  let component: Ay7agaComponent;
  let fixture: ComponentFixture<Ay7agaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ay7agaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ay7agaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
