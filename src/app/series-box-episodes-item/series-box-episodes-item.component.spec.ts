import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesBoxEpisodesItemComponent } from './series-box-episodes-item.component';

describe('SeriesBoxEpisodesItemComponent', () => {
  let component: SeriesBoxEpisodesItemComponent;
  let fixture: ComponentFixture<SeriesBoxEpisodesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesBoxEpisodesItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesBoxEpisodesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
