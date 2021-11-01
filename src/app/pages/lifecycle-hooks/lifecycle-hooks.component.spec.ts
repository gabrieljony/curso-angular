/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifecycleHooksComponent } from './lifecycle-hooks.component';

describe('LifecycleHooksComponent', () => {
  let component: LifecycleHooksComponent;
  let fixture: ComponentFixture<LifecycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
