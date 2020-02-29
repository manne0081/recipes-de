import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        // if(args.length > 0) {
        //     console.log('Multiply-Pipe -> Value: ' + value + ' -> Args: ' + args);
        // }
        return value * args;
    }

}
