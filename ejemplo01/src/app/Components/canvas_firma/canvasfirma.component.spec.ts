import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasfirmaComponent } from './canvasfirma.component';

describe('EditComponent', () => {
  let component: CanvasfirmaComponent;
  let fixture: ComponentFixture<CanvasfirmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasfirmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
