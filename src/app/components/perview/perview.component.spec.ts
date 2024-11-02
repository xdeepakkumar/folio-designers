import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerviewComponent } from './perview.component';

describe('PerviewComponent', () => {
  let component: PerviewComponent;
  let fixture: ComponentFixture<PerviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PerviewComponent]
    });
    fixture = TestBed.createComponent(PerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
