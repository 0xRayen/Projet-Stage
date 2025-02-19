import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorFormComponent } from './operator-form.component';

describe('OperatorFormComponent', () => {
  let component: OperatorFormComponent;
  let fixture: ComponentFixture<OperatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
