import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDescriptionComponent } from './serie-description.component';

describe('SerieDescriptionComponent', () => {
  let component: SerieDescriptionComponent;
  let fixture: ComponentFixture<SerieDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
