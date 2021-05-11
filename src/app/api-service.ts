import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    apiURL: string = 'http://d1c1d4a40e08.ngrok.io/';
    get_image: string = 'get_image'
    data = {}
    constructor(private httpClient: HttpClient) {

    }

    public getImages(dataset: string, image_type) {
        // if (!!this.data[dataset]) {
        //     return of(this.data[dataset])
        // }
        return this.httpClient.get<any>(`${this.apiURL}get_images?dataset=${dataset}&type_image=${image_type}`).pipe(
            map(response => {
                console.log(response);
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

    public getResults(obj) {
        // if (!!this.data[dataset]) {
        //     return of(this.data[dataset])
        // }
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
        return this.httpClient.post<any>(`${this.apiURL}result`, obj, httpOptions)
        .pipe(
            map(response => {
                console.log(response);
                if (response && response.data)
                    return response.data
                else
                    return [];
            },    
          catchError(error => {
            return throwError(error);
        })));
    }
}