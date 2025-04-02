import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishConfirmationDialogComponent } from './finish-confirmation-dialog.component';

describe('FinishConfirmationDialogComponent', () => {
  let component: FinishConfirmationDialogComponent;
  let fixture: ComponentFixture<FinishConfirmationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FinishConfirmationDialogComponent]
    });
    fixture = TestBed.createComponent(FinishConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
