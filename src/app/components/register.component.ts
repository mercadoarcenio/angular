import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'register',
	templateUrl: '../views/login.html'

})
export class RegisterComponent implements OnInit{
	public title: string;

	constructor(
   		//private _route: ActivatedRoute,
   		//private _roter: Router
	){
		this.title = 'componente de register';
	}

	ngOnInit(){
	console.log('El componente register.component ha sido cargado');
	}
}