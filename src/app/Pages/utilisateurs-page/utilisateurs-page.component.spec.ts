import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursPageComponent } from './utilisateurs-page.component';

describe('UtilisateursPageComponent', () => {
  let component: UtilisateursPageComponent;
  let fixture: ComponentFixture<UtilisateursPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateursPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
