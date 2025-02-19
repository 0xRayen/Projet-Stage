import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelTicketComponent } from './personnel-ticket.component';

describe('PersonnelTicketComponent', () => {
  let component: PersonnelTicketComponent;
  let fixture: ComponentFixture<PersonnelTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
