import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTicketComponent } from './categories-ticket.component';

describe('CategoriesTicketComponent', () => {
  let component: CategoriesTicketComponent;
  let fixture: ComponentFixture<CategoriesTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
