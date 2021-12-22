import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHttpComponent } from './manager-http.component';

describe('ManagerHttpComponent', () => {
  let component: ManagerHttpComponent;
  let fixture: ComponentFixture<ManagerHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
