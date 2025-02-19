import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPersonnelFormComponent } from './cat-personnel-form.component';

describe('CatPersonnelFormComponent', () => {
  let component: CatPersonnelFormComponent;
  let fixture: ComponentFixture<CatPersonnelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPersonnelFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatPersonnelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
