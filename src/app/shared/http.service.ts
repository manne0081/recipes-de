import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    sendData(user: any) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://recipes-de.firebaseio.com/data.json', body, {headers: headers});
    }

    getData() {
        return this.http.get('https://recipes-de.firebaseio.com/data.json')
            .pipe(map((response: Response) => {
                const data = response;
                const returnArray = [];
                for (let key in data) {
                    returnArray.push(data[key]);
                }
                return returnArray;
            }));
    }

}
