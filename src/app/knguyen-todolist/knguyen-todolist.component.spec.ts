import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnguyenTodolistComponent } from './knguyen-todolist.component';

describe('KnguyenTodolistComponent', () => {
  let component: KnguyenTodolistComponent;
  let fixture: ComponentFixture<KnguyenTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnguyenTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnguyenTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
