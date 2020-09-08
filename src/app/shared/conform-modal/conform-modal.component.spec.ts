import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformModalComponent } from './conform-modal.component';

describe('ConformModalComponent', () => {
  let component: ConformModalComponent;
  let fixture: ComponentFixture<ConformModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
