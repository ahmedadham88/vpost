import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Router} from 'angular2/router';

@Injectable()
export class VPostService {

	constructor(private http: Http, private _router: Router) { }

	private _backendUrl = 'http://localhost:8080/';
}