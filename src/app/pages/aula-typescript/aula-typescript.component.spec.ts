import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaTypescriptComponent } from './aula-typescript.component';

describe('AulaTypescriptComponent', () => {
  let component: AulaTypescriptComponent;
  let fixture: ComponentFixture<AulaTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulaTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulaTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
