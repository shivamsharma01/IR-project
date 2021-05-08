import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    apiURL: string = 'http://594011e102c5.ngrok.io';
    constructor(private httpClient: HttpClient) {

    }

    public getImages(){
        return this.httpClient.get<String[]>(`${this.apiURL}/get_images`);
    }
}