import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymaplibComponent } from './mymaplib.component';

describe('MymaplibComponent', () => {
  let component: MymaplibComponent;
  let fixture: ComponentFixture<MymaplibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymaplibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymaplibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
