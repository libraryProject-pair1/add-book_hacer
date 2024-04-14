import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSearchComponent } from './home-page-search.component';

describe('HomePageSearchComponent', () => {
  let component: HomePageSearchComponent;
  let fixture: ComponentFixture<HomePageSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
