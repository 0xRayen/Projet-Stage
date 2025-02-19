import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournauxPageComponent } from './journaux-page.component';

describe('JournauxPageComponent', () => {
  let component: JournauxPageComponent;
  let fixture: ComponentFixture<JournauxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournauxPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
