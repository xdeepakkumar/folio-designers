import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAndExperienceComponent } from './skill-and-experience.component';

describe('SkillAndExperienceComponent', () => {
  let component: SkillAndExperienceComponent;
  let fixture: ComponentFixture<SkillAndExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkillAndExperienceComponent]
    });
    fixture = TestBed.createComponent(SkillAndExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
