angular
	//modulo
	.module('starter')
	.factory('senhaFactory',function(){
		var senhaFactory = {
			login:{
				email:'email@email.com',
			}, 
			validaSenha : validaSenha 
		}
		
		return senhaFactory;
		
		function validaSenha(objSenha){
			
			if(objSenha.email == ""){
				return false;
			}
			return true;
			
		}
	})
