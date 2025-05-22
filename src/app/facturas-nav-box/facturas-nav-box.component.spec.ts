import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasNavBoxComponent } from './facturas-nav-box.component';

describe('FacturasNavBoxComponent', () => {
  let component: FacturasNavBoxComponent;
  let fixture: ComponentFixture<FacturasNavBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturasNavBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturasNavBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
