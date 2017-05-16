angular
	//modulo
	.module('starter')
	.factory('configFactory',function(){
		
		var configFactory = {
			imagem	   : 'a.jpg',
			nome	   : 'Nome Completo',
			apelido	   : 'Apelido',
			nascimento : '05/03/1997',
			cep        : '87090-410',
			sexo       : 'Masculino',
			perfil     : 'Atleta',
			esportes   : ['Futebol de Campo','Basquete', 'Volei de Quadra']

		}
		
		return configFactory;
		
	})
