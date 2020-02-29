import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-recipe-start',
    templateUrl: './recipe-start.component.html',
    styleUrls: ['./recipe-start.component.css'],
    providers: [HttpService]
})

export class RecipeStartComponent {
    text = 'bitte ein rezept wählen';

    //Pipe-Test
    text2 = 'irgendein text';
    date = new Date();
    shoppingList = ['Brot', 'Milch', 'Honig', 'Nüsse', 'Vollkornbrot'];
    asyncValue = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Text erscheint 2 Sek. nach laden der APP');
        }, 2000);
    });
    users: any = [];
    asyncUsers = this.httpService.getData();


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
                // error => console.log('Fehler-Status: ', error.status)
                error => this.errorCheck(error)
            );
    }


    errorCheck(error: any) {
        if(error.status == 404) {
            console.log('Fehler-Status:', error.status, '-> Keine Datenbankverbindung.');
        } else {
            console.log('Fehler-Status:', error.status, '-> Keine Ahnung warum... :-)');
        }
    }

}
