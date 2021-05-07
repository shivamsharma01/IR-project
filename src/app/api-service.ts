import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    apiURL: string = 'http://www.server.com/api/';
    constructor(private httpClient: HttpClient) {

    }

    public getContacts(){
        return this.httpClient.get<String[]>(`${this.apiURL}/customers`);
    }
}