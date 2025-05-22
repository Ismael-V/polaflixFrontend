import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasBoxComponent } from './facturas-box.component';

describe('FacturasBoxComponent', () => {
  let component: FacturasBoxComponent;
  let fixture: ComponentFixture<FacturasBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
