import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormBuilderComponent } from './data-form-builder.component';

describe('DataFormBuilderComponent', () => {
  let component: DataFormBuilderComponent;
  let fixture: ComponentFixture<DataFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
