angular
	//modulo
	.module('starter')
	.factory('configFactory',function(){
		
		var listaEsportes = [{id:1, acessivel: false, descricao:"Futebol de Campo"},
							 {id:2, acessivel: false, descricao:"Futebol de Salão"},
							 {id:3, acessivel: false, descricao:"Futebol Society"},
							 {id:4, acessivel: true,  descricao:"Futebol de Sete"},
							 {id:5, acessivel: true,  descricao:"Volei de Praia"},
							 {id:6, acessivel: true,  descricao:"Volei de Quadra"},
							 {id:7, acessivel: false, descricao:"Volei Sentado"},
							 {id:8, acessivel: true,  descricao:"Basquete de Quadra"},
							 {id:9, acessivel: false, descricao:"Basquete em Cadeira de Rodas"}
							];
		
		var userConta     = {
								imagem	   : 'a.jpg',
								nome	   : 'Nome Completo',
								apelido	   : 'Apelido',
								nascimento : new Date('March 05, 1997 00:00:00'),
								cep        : '87090-410',
								sexo       : 'M',
								perfil     : 'Atleta',
								esportes   : [	{id:1, status:true},
												{id:2, status:false}, 
												{id:3, status:true},
												{id:4, status:false},
												{id:5, status:true},
												{id:6, status:false},
												{id:7, status:true},
												{id:8, status:false},
												{id:9, status:true}
											 ]
							};
		
		function validaConfig(obj){
			//console.log(obj);
			//configFactory.userConta = obj;
			console.log(obj);
			
			return(true);
		}
		
		var configFactory = {
			userConta     : userConta,
			listaEsportes : listaEsportes,
			validaConfig  : validaConfig 
		}
		
		return configFactory;
		
	})
