import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
	selector: 'login',
	templateUrl: '../views/login.html',
	providers: [UserService] 

})
export class LoginComponent implements OnInit{
	public title: string;
	public user;
	public identity;
	public token;


constructor(
   		private _route: ActivatedRoute,
   		private _roter: Router,
   		private _userService: UserService
	){
		this.title = 'Identificate';
		this.user = {
		"email": "",
		"password": "",
		"getHash": "true"   
		}; 
	}

	ngOnInit(){
	console.log('El componente login.component ha sido cargado');

	console.log(JSON.parse(localStorage.getItem('identity')));
	
  }
  onSubmit(){
     console.log(this.user);
     this._userService.signup(this.user).subscribe(
      response => {
       this.identity = response;

       if(this.identity.length <= 1){
       	console.log('Error en el servidor');
       }{   
         if(!this.identity.status){
            localStorage.setItem('identity',JSON.stringify(this.identity));
         }
       }

      },
      error => {
       console.log(<any>error);
      }

     );
  }
}

