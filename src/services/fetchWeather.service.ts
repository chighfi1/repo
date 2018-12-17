import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import '../models/weatherView.model';
import { WeatherViewModel } from '../models/weatherView.model';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable()
export class RetrieveDataService {
    data: Object;
    loading: boolean;

    constructor(public http: HttpClient) { }


    getWeather(param: string, value: any): Promise<WeatherViewModel[]> {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve, reject) => {
            this.http
            .get<WeatherViewModel[]>(`http://localhost:3000/weatherRecords`)
            .toPromise().then(response => {
                if (response) {
                    debugger;
                    resolve(response);
                }
            })
                .catch((error) => {
                    reject(error);
                });
            });
        }
    }

    // addUser(): void {
    //     this.loading = true;
    //     this.http.post('http://greenmachine.mockable.io/mvp',
    // JSON.stringify({
    //     body: 'bar',
    //     title: 'foo',
    //     userId: 1
    // }))
    // .subscribe((res: Response) => {
    //     this.data = res.json();
    //     console.log(this.data);
    //     this.data = false;
    // });
    // }





