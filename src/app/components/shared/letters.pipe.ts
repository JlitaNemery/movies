import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'letters'
})
export class LettersPipe implements PipeTransform{

    transform(input: string){
        let regexp = new RegExp('[\s A-Za-z]+');
        return regexp.exec(input);
    }
}