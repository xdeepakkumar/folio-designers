import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FolioService {
  private apiBaseUrl = environment.apiUrl;
  token = sessionStorage.getItem('token');
  folioId = this.commonService.getFolioId();

  constructor(private http: HttpClient, private commonService: CommonService) {}

  savePersonalDetails(data: any): Observable<any> {
    // Set headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    data.userId = this.commonService.getLoggedInUserId();
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
    return this.http.get(`${this.apiBaseUrl}/folio/get/${this.folioId}`, {
      headers,
    });
  }

  saveskillAndExperienceDetails(data: any): Observable<any> {
    // Set headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    data.userId = this.commonService.getLoggedInUserId();
    return this.http.post(
      `${this.apiBaseUrl}/folio/create?types=SKILL_DETAILS,EXPERIENCE_DETAILS`,
      data,
      { headers }
    );
  }

  saveProjectAndCertificatesDetails(data: any): Observable<any> {
    // Set headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    data.userId = this.commonService.getLoggedInUserId();
    return this.http.post(
      `${this.apiBaseUrl}/folio/create?types=PROJECT_DETAILS,CERTIFICATION_DETAILS`,
      data,
      { headers }
    );
  }
}
