import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesBoxComponent } from './series-box.component';

describe('SeriesBoxComponent', () => {
  let component: SeriesBoxComponent;
  let fixture: ComponentFixture<SeriesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
