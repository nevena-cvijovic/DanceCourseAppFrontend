import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../environments/environment";
import {AuthServiceService} from "./auth/auth-service.service";
@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private apiServiceUrl = environment.apiBaseUrl;
  constructor() {
    axios.defaults.baseURL = this.apiServiceUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");

    }
  }


  request(method: string, url: string, data: any): Promise<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }
}
