import {Injectable} from 'angular2/core';

@Injectable()
export class Fighters {
  langs: any;
  constructor() {
    this.langs = [
      'javascript',
      'coffeescript',
      'typescript',
      'dart'
    ];
  }
}
