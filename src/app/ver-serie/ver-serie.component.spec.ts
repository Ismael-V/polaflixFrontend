import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSerieComponent } from './ver-serie.component';

describe('VerSerieComponent', () => {
  let component: VerSerieComponent;
  let fixture: ComponentFixture<VerSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerSerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
