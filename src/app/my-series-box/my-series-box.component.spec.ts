import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySeriesBoxComponent } from './my-series-box.component';

describe('MySeriesBoxComponent', () => {
  let component: MySeriesBoxComponent;
  let fixture: ComponentFixture<MySeriesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySeriesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySeriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
