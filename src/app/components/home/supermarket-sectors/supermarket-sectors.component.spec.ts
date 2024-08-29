import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermarketSectorsComponent } from './supermarket-sectors.component';

describe('SupermarketSectorsComponent', () => {
  let component: SupermarketSectorsComponent;
  let fixture: ComponentFixture<SupermarketSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupermarketSectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermarketSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
