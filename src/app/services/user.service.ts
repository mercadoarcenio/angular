import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class UserService{
	public url: string;
	public identity;
	public token;

	constructor(private _http: Http){
	  this.url = GLOBAL.url;
	}
	signup(user_to_login){ 
	 let json = JSON.stringify(user_to_login);
	 let params = "json="+JSON;
	 let headers = new Headers({'Content-type':'application/X-www-form-urlencoded'});

	 return this._http.post(this.url+'/login', params, {headers: headers})
	                  .map(res =>res.json());
	}
}
