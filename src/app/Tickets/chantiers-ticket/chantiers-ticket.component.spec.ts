import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantiersTicketComponent } from './chantiers-ticket.component';

describe('ChantiersTicketComponent', () => {
  let component: ChantiersTicketComponent;
  let fixture: ComponentFixture<ChantiersTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantiersTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantiersTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
