import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-recipe-start',
    templateUrl: './recipe-start.component.html',
    styleUrls: ['./recipe-start.component.css'],
    providers: [HttpService]
})
export class RecipeStartComponent {
    users: any = [];

    text = 'bitte ein rezept wählen';
    text2 = 'irgendein text';
    date = new Date();
    list = ['Brot', 'Milch', 'Honig', 'Nüsse', 'Vollkornbrot'];
    asyncValue = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('2 Sekunden sind rum!');
        }, 2000);
    });

    constructor(private httpService: HttpService,
                private httpClient: HttpClient) {}

    onSubmit(username: string, email: string) {
        this.httpService.sendData({username: username, email: email})
            .subscribe(
                data => console.log(data),
                // error => console.log('Fehler beim übermitteln... ', error)
                error => this.errorCheck(error)
            );
    }


    testString: string;
    test() {
        let text = 'Hallo ';
        let nummer = this.test2(2,3);
        console.log(text + nummer);
        this.testString = text + nummer;
    }

    test2(n: number, m: number): number {
        return n + m;
    }


    onGetData() {
        this.httpService.getData()
            .subscribe(
                // data => console.log(data),
                data => this.users = data,
                // error => console.log('Fehler beim abfragen... ', error.status)
                error => this.errorCheck(error)
            );
    }

    errorCheck(error: any) {
        if(error.status == 404) {
            console.log('Fehler 404 beim abfragen, keine Datenbankverbindung... ', error.status);
        } else {
            console.log('Fehler beim abfragen, keine Ahnung warum :-) ', error.status);
        }
    }

}
