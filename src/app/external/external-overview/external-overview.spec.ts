import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalOverview } from './external-overview';

describe('ExternalOverview', () => {
  let component: ExternalOverview;
  let fixture: ComponentFixture<ExternalOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
