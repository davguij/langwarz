import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';

import {Title} from '../providers/title'; // LIMPIAR?

import {GHApi} from '../providers/ghapi';

import {Fighters} from '../data/fighters';

@Component({
  selector: 'fight',
  directives: [FORM_DIRECTIVES],
  providers: [Title, GHApi, Fighters],
  pipes: [],
  // styles: [require('./home.css')],
  template: require('./fight.html')
})
export class Fight {
  // TypeScript public modifiers
  firstFighter: string;
  secondFighter: string;
  constructor(public ghApi: GHApi) { // LIMPIAR title!!!
    ghApi.getReposByLang('typescript').subscribe(res => console.log(res));
  }
}
