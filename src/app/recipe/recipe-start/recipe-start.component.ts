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

    // TEST...
    val: string;
    funTest (s: string, n: number) {
        this.val = s + " " + this.fun2(n);
        console.log(this.hello('function "hello": '));
        console.log(this.helloA('function "helloA": ', 'hello world!'));
        console.log(this.helloB('function "helloB": ', 'hello world!'));
        console.log(this.helloC('function "helloC": ', 'hello world!'));
        console.log(this.helloD());


    }
    fun2 (n: number): number {
        return n*n;
    }
    hello = (x: string) => {
        return x + "hello world!";
    }
    helloA (x: string, y: string) {
        return x + y;
    }
    helloB = (x: string, y: string) => {
        return x + y;
    }
    helloC = (x: string, y: string) => x + y;
    helloD() {
        return (x, y) => x + y;
    }

    hello1 = () => {
        return "Hello World!";
    }
    hello2 = () => { "Hello World!" } 
    hello3 = () => "Hello World!"
    hello4 = (val2) => "Hello " + val2; 


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
