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
		var userSalas = [
							{id:1, img:'../img/brasao/bigodegrosso.jpg', nome:'Bigode Grosso', periodo:'Quarta 21h',               esporte:'Futebol de Campo',             url:'app.intro', sexo:'m', acessibilidade:'nao', valor:200.00, cota:5.00, arrecadado: 100.00, capacidade:40, publica: true },
							{id:2, img:'../img/brasao/dumbartonfc.png',  nome:'Dumbarton FC',  periodo:'Terça e Quinta 20:30h',    esporte:'Futebol de Sete',              url:'app.intro', sexo:'f', acessibilidade:'sim', valor:300.00, cota:7.00, arrecadado: 120.00, capacidade:50, publica: false},
							{id:3, img:'../img/brasao/escudos.gif',      nome:'escudos',       periodo:'Segunda Quarta Sexta 22h', esporte:'Basquete', 					   url:'app.intro', sexo:'m', acessibilidade:'nao', valor:260.00, cota:5.00, arrecadado: 110.00, capacidade:60, publica: false},
							{id:4, img:'../img/brasao/guangzhou.png',    nome:'guangzhou',     periodo:'Terça 20h',                esporte:'Volei sentado', 			   url:'app.intro', sexo:'a', acessibilidade:'sim', valor:220.00, cota:6.00, arrecadado: 120.00, capacidade:40, publica: true },
							{id:5, img:'../img/brasao/madfoz.png',       nome:'madfoz',        periodo:'Quinta 19h30',   		   esporte:'Volei de Praia', 			   url:'app.intro', sexo:'f', acessibilidade:'nao', valor:230.00, cota:7.00, arrecadado: 180.00, capacidade:50, publica: false},
							{id:6, img:'../img/brasao/manchester.jpg',   nome:'manchester',    periodo:'Domingo 16h', 			   esporte:'Futebol de Salão', 			   url:'app.intro', sexo:'m', acessibilidade:'nao', valor:190.00, cota:4.00, arrecadado: 150.00, capacidade:50, publica: false},
							{id:7, img:'../img/brasao/unionminas.jpg',   nome:'unionminas',    periodo:'Todos os Dias 19h', 	   esporte:'Basquete em Cadeira de Rodas', url:'app.intro', sexo:'m', acessibilidade:'sim', valor:250.00, cota:5.00, arrecadado: 100.00, capacidade:50, publica: true }
						];
	
		
		function validaConfig(obj){
			//console.log(obj);
			//configFactory.userConta = obj;
			console.log(obj);
			
			return(true);
		}
		
		var configFactory = {
			userConta     : userConta,
			userSalas     : userSalas,
			listaEsportes : listaEsportes,
			validaConfig  : validaConfig 
		}
		
		return configFactory;
		
	})
