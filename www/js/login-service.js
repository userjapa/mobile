angular
	//modulo
	.module('starter')
	.factory('loginFactory',function(){
		var loginFactory = {
			login:{
				email:'email@email.com',
				senha:'senha12'
			}, 
			validaLogin : validaLogin 
		}
		
		return loginFactory;
		
		function validaLogin(objLogin){
			
			if(objLogin.email == loginFactory.login.email && objLogin.senha == loginFactory.login.senha){
				return true;
			}
			return false;
			
		}
	})
