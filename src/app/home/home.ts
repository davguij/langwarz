import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgFor} from 'angular2/common';
import { RouterLink } from 'angular2/router';

import {Title} from '../providers/title'; // LIMPIAR?

import {GHApi} from '../providers/ghapi';

import {Fighters} from '../data/fighters';

@Component({
  selector: 'home',
  directives: [FORM_DIRECTIVES],
  providers: [Title, GHApi, Fighters],
  pipes: [],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  // TypeScript public modifiers
  firstFighter: string;
  secondFighter: string;
  constructor(public fighters: Fighters,
    public ghApi: GHApi) { // LIMPIAR title!!!
    // ghApi.getReposByLang('typescript').subscribe(res => console.log(res.total_count));
    console.log(this.fighters.langs);
    [this.firstFighter, this.secondFighter] = this.fighters.langs;

  }

  ngOnInit() {
    console.log('hello Homeee');

  }
}
