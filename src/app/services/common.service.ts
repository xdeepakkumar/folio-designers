import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private userId = null;

  constructor() {}

  getLoggedInUserId() {
    const userInfo = sessionStorage.getItem('userinfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      console.log((this.userId = parsedUserInfo.response[0].userId));
      return (this.userId = parsedUserInfo.response[0].userId);
    }
  }

  getFolioId() {
    const userInfo = sessionStorage.getItem('userinfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      return (this.userId = parsedUserInfo.response[0].folioId);
    }
  }
}
