import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantiersListComponent } from './chantiers-list.component';

describe('ChantiersListComponent', () => {
  let component: ChantiersListComponent;
  let fixture: ComponentFixture<ChantiersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantiersListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
