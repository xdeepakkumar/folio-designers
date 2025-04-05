import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-finish-confirmation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="dialog-wrapper">
      <h2 mat-dialog-title class="dialog-title">
        <mat-icon color="warn" class="icon">warning</mat-icon>
        Confirm Completion
      </h2>

      <mat-divider></mat-divider>

      <mat-dialog-content class="dialog-content">
        You are about to <strong>complete your portfolio</strong>. <br />Please
        make sure all your information is correct before proceeding.
      </mat-dialog-content>

      <mat-dialog-actions align="end" class="dialog-actions">
        <button
          mat-stroked-button
          class="small-btn"
          color="primary"
          (click)="onCancel()"
        >
          Cancel
        </button>
        <button
          mat-flat-button
          color="accent"
          class="small-btn"
          (click)="onFinish()"
        >
          Finish
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .small-btn {
        font-size: 12px;
        padding: 3px 10px;
        line-height: 1.2;
        min-width: 84px;
      }
      .dialog-wrapper {
        padding: 16px;
        min-width: 300px;
      }

      .dialog-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bold;
      }

      .icon {
        font-size: 24px;
      }

      .dialog-content {
        font-size: 15px;
        color: #333;
      }

      .dialog-actions {
        gap: 12px;
      }
    `,
  ],
})
export class FinishConfirmationDialogComponent {
  private dialogRef = inject(MatDialogRef<FinishConfirmationDialogComponent>);

  constructor(private snackBar: MatSnackBar) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onFinish(): void {
    this.dialogRef.close('finish');
    this.snackBar.open('All data saved successfully!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }
}
