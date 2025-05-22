import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSerieBoxItemComponent } from './list-serie-box-item.component';

describe('ListSerieBoxItemComponent', () => {
  let component: ListSerieBoxItemComponent;
  let fixture: ComponentFixture<ListSerieBoxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSerieBoxItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSerieBoxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
