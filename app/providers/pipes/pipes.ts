import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'shuffle'})
export class ShufflePipe implements PipeTransform {
    transform(object: any[], args: any[]): any {
      if (object)

      var currentIndex = object.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = object[currentIndex];
        object[currentIndex] = object[randomIndex];
        object[randomIndex] = temporaryValue;
      }

      return object;

    }
}

@Pipe({ name: 'output'})
export class OutputPipe implements PipeTransform {
    transform(object: any[], args: any[]): any {
      if (object)
      console.log(object);
      return object;

    }
}