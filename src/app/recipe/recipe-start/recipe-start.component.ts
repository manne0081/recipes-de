import { Component } from '@angular/core';
import { HttpService } from '../../shared/http.service';

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

    constructor(private httpService: HttpService) {}

    onSubmit(username: string, email: string) {
        this.httpService.sendData({username: username, email: email})
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        console.log(username + " -- " + email)
    }

    onGetData() {
        this.httpService.getData()
            .subscribe(
                // data => console.log(data)
                data => this.users = data
            );
    }


}
