angular
	//modulo
	.module('starter')
	.factory('cadastroFactory',function(){
		var cadastroFactory = {
			validaCadastro : validaCadastro 
		}
		
		return cadastroFactory;
		
		function validaCadastro(objCadastro){
			
			if(objCadastro.nome && objCadastro.email && objCadastro.termo){
				return true;
			}
			
			return false;
			
		}
	})
