import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    apiURL: string = 'http://2451c4cc348a.ngrok.io/';
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
}