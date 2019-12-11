import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhanteComponent } from './acompanhante.component';

describe('AcompanhanteComponent', () => {
  let component: AcompanhanteComponent;
  let fixture: ComponentFixture<AcompanhanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanhanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanhanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
