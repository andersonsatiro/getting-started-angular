import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStackComponent } from './main-stack.component';

describe('MainStackComponent', () => {
  let component: MainStackComponent;
  let fixture: ComponentFixture<MainStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
