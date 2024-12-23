import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="sticky-footer">
      <div class="text-muted mt-2">
        <h5>
          <span>&copy; 2025 Folio Designers. All Rights Reserved.</span>
        </h5>
      </div>
    </footer>
  `,
  styles: [
    `
      .sticky-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #f8f8f8;
        padding: 2px;
        text-align: center;
        box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
      }
    `,
  ],
})
export class FooterComponent {}
