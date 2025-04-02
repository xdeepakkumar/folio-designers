import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-finish-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule], // You can import other modules like Material Dialog if needed
  template: `
    <h2 mat-dialog-title>Are you sure?</h2>
    <mat-dialog-content>
      <p>
        You are about to complete your portfolio details. Do you want to
        continue?
      </p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-button style="color: green;" (click)="onFinish()">
        Finish
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      /* Your custom dialog styles here */
    `,
  ],
})
export class FinishConfirmationDialogComponent {
  // Inject the MatDialogRef to close the dialog
  private dialogRef = inject(MatDialogRef<FinishConfirmationDialogComponent>);

  constructor() {}

  onCancel(): void {
    // Close the dialog without passing a result
    this.dialogRef.close();
  }

  onFinish(): void {
    // Close the dialog with 'finish' result
    this.dialogRef.close('finish');
  }
}
