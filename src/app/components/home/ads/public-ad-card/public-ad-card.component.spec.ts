import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAdCardComponent } from './public-ad-card.component';

describe('PublicAdCardComponent', () => {
  let component: PublicAdCardComponent;
  let fixture: ComponentFixture<PublicAdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicAdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
