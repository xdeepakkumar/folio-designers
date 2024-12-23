import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule, // Import MatDialogModule
    MatButtonModule, // Import MatButtonModule
  ],
  template: `
    <h4 mat-dialog-title class="text-center">Profile Image</h4>
    <mat-dialog-content>
      <img
        src="../../../assets/me.png"
        alt="Profile Image"
        class="img-fluid mb-3"
      />
      <button
        mat-raised-button
        style="background: linear-gradient(135deg, #16a085, #732d91); color: white; padding: 12px 24px; font-size: 12px; text-transform: uppercase; border: none; transition: background-color 0.3s ease-in-out;"
        type="button"
        (click)="uploadNewImage()"
      >
        Upload New Image
      </button>
    </mat-dialog-content>
  `,
  styles: [
    `
      .img-fluid {
        max-width: 150px;
        height: auto;
        border-radius: 50%;
        border: 4px solid #e2e2e2;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class ImageDialogComponent {
  uploadNewImage(): void {
    alert('Upload new image functionality will go here.');
  }
}
