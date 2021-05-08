import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    apiURL: string = 'http://7fbb0905c5b1.ngrok.io';
    data = {}
    constructor(private httpClient: HttpClient) {

    }

    public getImages(dataset: string) {
        // if (!!this.data[dataset]) {
        //     return of(this.data[dataset])
        // }
        return this.httpClient.get<any>(`${this.apiURL}/get_images?dataset=${dataset}`).pipe(
            map(response => {
                response = JSON.parse(response.result)
                if (response && response.data)
                    return response.data
                else
                    return [];
            },                
            catchError(
                error => {
                    return throwError(error);
                }
            )
        ));
    }
}