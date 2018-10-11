import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixipoclibComponent } from './pixipoclib.component';

describe('PixipoclibComponent', () => {
  let component: PixipoclibComponent;
  let fixture: ComponentFixture<PixipoclibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixipoclibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixipoclibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
