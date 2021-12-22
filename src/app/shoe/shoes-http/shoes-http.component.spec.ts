import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesHttpComponent } from './shoes-http.component';

describe('ShoesHttpComponent', () => {
  let component: ShoesHttpComponent;
  let fixture: ComponentFixture<ShoesHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
