import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FolioService {
  private apiBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  savePersonalDetails(data: any) {
    return this.http.post(
      `${this.apiBaseUrl}/folio/create?types=PERSONAL_DETAILS,EDUCATION_DETAILS`,
      data
    );
  }
}
