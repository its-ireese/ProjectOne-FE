import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeamplesComponent } from './zeamples.component';

describe('ZeamplesComponent', () => {
  let component: ZeamplesComponent;
  let fixture: ComponentFixture<ZeamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
