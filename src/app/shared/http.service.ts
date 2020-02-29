import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()

export class HttpService {
    private handleError: HandleError;
    private apiUrl = 'https://recipes-de.firebaseio.com/data.json';


    constructor(private httpClient: HttpClient,
                private httpErrorHandler: HttpErrorHandler)
    {
        this.handleError = httpErrorHandler.createHandleError('test...');
    }

    // Der .catch-Teil funktioniert nicht...
    public sendData(user: any) {
        const body = JSON.stringify(user);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.post(this.apiUrl, body, {headers: headers})
            // .catch((response: Response) => {
            //     return Observable.throw(response.json());
            // })
            ;
    }


    // Funktioniert nur bei Fehler, wenn Fehler verhält es sich nicht wie gewünscht...
    // public sendData(user: any): Observable<any> {
    //     const body = JSON.stringify(user);
    //     const headers = new HttpHeaders({'Content-Type': 'application/json'});
    //     return this.httpClient.post<any>(this.apiUrl, body, {headers: headers})
    //         .pipe(
    //             catchError(this.handleError('updateHero', user))
    //         );
    // }


    // Liefert nicht das richtige Ergebnis zurück, wenn die Quelle stimmt...
    // public sendData(user: any) {
    //     const body = JSON.stringify(user);
    //     const headers = new HttpHeaders({'Content-Type': 'application/json'});
    //     return this.httpClient.post(this.apiUrl, body, {headers: headers})
    //         .pipe(map((response: Response) => {}))
    //     ;
    // }


    //GET   =>   (.map und .subscribe sind Observebles...)
    public getData() {
        return this.httpClient.get(this.apiUrl)
            .pipe(map((response: Response) => {
                const data = response;
                const returnArray = [];
                for (let key in data) {
                    returnArray.push(data[key]);
                }
                return returnArray;
            }))
        ;
    }


}
