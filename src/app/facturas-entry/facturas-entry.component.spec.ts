import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasEntryComponent } from './facturas-entry.component';

describe('FacturasEntryComponent', () => {
  let component: FacturasEntryComponent;
  let fixture: ComponentFixture<FacturasEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
