import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdditionalSubjectService {
  private submitFormSubject = new Subject<void>();

  // Observable to notify when to submit the form
  submitForm$ = this.submitFormSubject.asObservable();

  // Method to trigger form submission

  triggerFormSubmit() {
    this.submitFormSubject.next();
  }
}
