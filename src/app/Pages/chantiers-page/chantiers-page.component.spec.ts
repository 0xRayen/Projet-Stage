import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChantiersPageComponent } from './chantiers-page.component';

describe('ChantiersPageComponent', () => {
  let component: ChantiersPageComponent;
  let fixture: ComponentFixture<ChantiersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChantiersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChantiersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
