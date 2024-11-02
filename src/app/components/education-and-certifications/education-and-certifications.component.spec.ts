import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndCertificationsComponent } from './education-and-certifications.component';

describe('EducationAndCertificationsComponent', () => {
  let component: EducationAndCertificationsComponent;
  let fixture: ComponentFixture<EducationAndCertificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EducationAndCertificationsComponent]
    });
    fixture = TestBed.createComponent(EducationAndCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
