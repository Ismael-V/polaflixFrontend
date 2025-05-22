import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieNavigationBoxComponent } from './serie-navigation-box.component';

describe('SerieNavigationBoxComponent', () => {
  let component: SerieNavigationBoxComponent;
  let fixture: ComponentFixture<SerieNavigationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieNavigationBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieNavigationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
