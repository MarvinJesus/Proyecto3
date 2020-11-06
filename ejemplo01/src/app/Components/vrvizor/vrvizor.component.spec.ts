import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrvizorComponent } from './vrvizor.component';

describe('VrvizorComponent', () => {
  let component: VrvizorComponent;
  let fixture: ComponentFixture<VrvizorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrvizorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrvizorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
