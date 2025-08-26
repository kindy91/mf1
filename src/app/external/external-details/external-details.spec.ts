import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalDetails } from './external-details';

describe('ExternalDetails', () => {
  let component: ExternalDetails;
  let fixture: ComponentFixture<ExternalDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
