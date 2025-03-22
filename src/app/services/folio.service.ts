import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FolioService {
  private apiBaseUrl = environment.apiUrl;
  token = sessionStorage.getItem('token');
  folioId = sessionStorage.getItem('folioId');

  constructor(private http: HttpClient) {}

  savePersonalDetails(data: any): Observable<any> {
    // Set headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post(
      `${this.apiBaseUrl}/folio/create?types=PERSONAL_DETAILS,EDUCATION_DETAILS`,
      data,
      { headers }
    );
  }

  getPersonalDetails() {
    // Set headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    if (this.folioId == null) {
      this.folioId = '42abc3c3-4d4d-4885-a10a-b824d3c3af57';
    }

    return this.http.get(`${this.apiBaseUrl}/folio/get/${this.folioId}`, {
      headers,
    });
  }
}
