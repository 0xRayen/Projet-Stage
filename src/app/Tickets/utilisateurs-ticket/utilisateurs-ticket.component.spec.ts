import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursTicketComponent } from './utilisateurs-ticket.component';

describe('UtilisateursTicketComponent', () => {
  let component: UtilisateursTicketComponent;
  let fixture: ComponentFixture<UtilisateursTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
