import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasSummaryComponent } from './facturas-summary.component';

describe('FacturasSummaryComponent', () => {
  let component: FacturasSummaryComponent;
  let fixture: ComponentFixture<FacturasSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
