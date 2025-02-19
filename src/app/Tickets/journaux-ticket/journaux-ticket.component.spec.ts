import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournauxTicketComponent } from './journaux-ticket.component';

describe('JournauxTicketComponent', () => {
  let component: JournauxTicketComponent;
  let fixture: ComponentFixture<JournauxTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournauxTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournauxTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
