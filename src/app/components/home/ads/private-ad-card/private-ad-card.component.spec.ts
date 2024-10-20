import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAdCardComponent } from './private-ad-card.component';

describe('PrivateAdCardComponent', () => {
  let component: PrivateAdCardComponent;
  let fixture: ComponentFixture<PrivateAdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateAdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateAdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
