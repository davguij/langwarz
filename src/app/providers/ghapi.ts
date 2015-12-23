import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import 'rxjs';

@Injectable()
export class GHApi {
	constructor(public http: Http) {
	}

	getReposByLang(lang: string) {
		return this.http.get('https://api.github.com/search/repositories?q=language:' + lang)
			.map(resp => resp.json());
	}
}
