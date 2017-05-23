angular
	.module('starter')
	.factory('loginFactory',function(){
		
		/*---------- Vars ----------*/
		var login = {
						email:'email@email.com',
						senha:'senha12'
				    };
		/*---------- Vars ----------*/
		
		/*---------- Function ----------*/
		function validaLogin(objLogin){
			if(objLogin.email == loginFactory.login.email && objLogin.senha == loginFactory.login.senha){
				return true;
			}
			return false;
		}
		/*---------- /Function ----------*/
		
		/*---------- Object ----------*/
		var loginFactory = {
			login       : login, 
			validaLogin : validaLogin 
		};
		/*---------- /Object ----------*/
		
		return loginFactory;
		
	});