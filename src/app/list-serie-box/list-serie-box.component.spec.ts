import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSerieBoxComponent } from './list-serie-box.component';

describe('ListSerieBoxComponent', () => {
  let component: ListSerieBoxComponent;
  let fixture: ComponentFixture<ListSerieBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSerieBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSerieBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
