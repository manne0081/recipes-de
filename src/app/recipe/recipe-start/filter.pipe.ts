import { Pipe,  PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false     //not best practice
})

export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any) {
        if(value.length === 0) {
            return value;
        }
        let resultArray = [];
        for(let item of value) {
            if(item.match('^.*' + args + '.*$')) {  //regular expression
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
