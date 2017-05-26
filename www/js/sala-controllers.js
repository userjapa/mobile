'use strict';
angular.module('starter')
.controller('SalaCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, configFactory, cadastroFactory, $ionicPopup) {
	console.log("SalaCtrl");
	//---------- Set Header ----------
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
	
	/* Efeito motion */
	//---------- Set Motion ----------
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
	//---------- Set Ink -------
    ionicMaterialInk.displayEffect();
	/* /Efeito motion */
	
	//---------- Init ----------
    $(document).ready(function() {
		$('select').material_select();
	});
	/* /Efeito motion */
	
	//---------- Vars ----------
    //Dados da conta do usuario
	$scope.config = configFactory.userConta;
	//Lista de salas do usuario
	$scope.salas = configFactory.userSalas;
	//---------- function ----------
    /*
	 *	function getIndexOf(array, valor, propriedade)
	 *	int return(posicao)
	 *	pegar a posicao do array
	 **/
	var getIndexOf = function(arr, val, prop) {
		var tam = arr.length;
		var ini = 0;
      	for (ini=0; ini<tam; ini++) {
        	if (arr[ini][prop] == val) {
          		return ini;
        	}
      	}
      return false;
    }
	
	var index = getIndexOf($scope.salas, $stateParams.id, "id");
	
	//---------- function ----------
    //Dados da sala aberta
	$scope.sala = {
		id				: $stateParams.id,
		img				: $scope.salas[index]['img'], 
		nome			: $scope.salas[index]['nome'], 
		periodo			: $scope.salas[index]['periodo'],               
		esporte			: $scope.salas[index]['esporte'],             
		url				: $scope.salas[index]['url'], 
		sexo			: $scope.salas[index]['sexo'], 
		acessibilidade	: $scope.salas[index]['acessibilidade'],
		valor			: $scope.salas[index]['valor'],
		arrecadado		: $scope.salas[index]['arrecadado'],
		quantidade		: $scope.salas[index]['quantidade'],
		cota			: $scope.salas[index]['cota'],
		capacidade		: $scope.salas[index]['capacidade'],
		publica		    : $scope.salas[index]['publica']
	};
	
	$scope.participantes = {
						a: [
							{apelido:'Juca Bala', 			sexo: 'm', rank: 92.22 },
							{apelido:'Tom', 				sexo: 'm', rank: 78.63 },
							{apelido:'Ze Colmeia', 			sexo: 'm', rank: 95.96 },
							{apelido:'Fred Flintstone', 	sexo: 'm', rank: 46.89 },
							{apelido:'Jerry', 				sexo: 'm', rank: 95.78 },
							{apelido:'Dick Vigarista', 		sexo: 'm', rank: 46.49 },
							{apelido:'Leão da Montanha',	sexo: 'm', rank: 53.47 },
							{apelido:'Magila', 				sexo: 'm', rank: 95.74 },
							{apelido:'Dom Pixote', 			sexo: 'm', rank: 23.12 },
							{apelido:'Scooby-Doo', 			sexo: 'm', rank: 75.85 },
							{apelido:'Penelope Charmosa',	sexo: 'f', rank: 99.79 },
							{apelido:'Tartaruga Tuchê', 	sexo: 'm', rank: 25.85 },
							{apelido:'Tutubarão', 			sexo: 'm', rank: 15.25 },
						],
						b: [
							{apelido:'Adão Leão', 		sexo: 'm', rank: 92.52 },
							{apelido:'Lola Bunny', 		sexo: 'f', rank: 45.25 },
							{apelido:'Billy', 			sexo: 'm', rank: 94.14 },
							{apelido:'Terrivel', 		sexo: 'm', rank: 65.47 },
							{apelido:'Blu', 			sexo: 'm', rank: 96.63 },
							{apelido:'Estopa', 			sexo: 'm', rank: 69.85 },
							{apelido:'Troma Trem', 		sexo: 'm', rank: 98.75 },
							{apelido:'Rikochet', 		sexo: 'm', rank: 52.95 },
							{apelido:'Azmuth', 			sexo: 'm', rank: 90.75 },
							{apelido:'Flap Jack', 		sexo: 'm', rank: 85.15 },
							{apelido:'Capitão', 		sexo: 'm', rank: 95.53 },
							{apelido:'Darwin', 			sexo: 'm', rank: 74.54 },
							{apelido:'Marceline', 		sexo: 'f', rank: 72.56 },
							{apelido:'Frankie Foster', 	sexo: 'f', rank: 57.85 },
							{apelido:'Sedusa', 			sexo: 'f', rank: 67.57 },
						],
	};
	
	$scope.saldo = {
		positivo : ($scope.sala.arrecadado/$scope.sala.valor)*100,
		negativo : (((($scope.sala.arrecadado/$scope.sala.valor)*100)-100)* -1)
	};
	
	$scope.mensagens = [
		{id: 1, apelido:'Juca Bala',		mensagem:'Ola!'},
		{id: 2, apelido:'Ze Colmeia', 		mensagem:'Ei, tudo bem?'},
		{id: 3, apelido:'Troma Trem', 		mensagem:'Tudo otimo'},
		{id: 4, apelido:'Flap Jack', 		mensagem:'então, tem jogo?'},
		{id: 5, apelido:'Scooby-Doo', 		mensagem:'Ta marcado'},
		{id: 6, apelido:'Dick Vigarista', 	mensagem:'Quando?'},
		{id: 7, apelido:'Darwin', 			mensagem:'Quarta!'},
		{id: 7, apelido:'Darwin', 			mensagem:'Onde'},
		{id: 1, apelido:'Juca Bala', 		mensagem:'Na quadra 5 as 17h'},
		{id: 2, apelido:'Ze Colmeia', 		mensagem:'Nao vou conseguir chegar as 17. Guarda meu lugar'},
		{id: 3, apelido:'Troma Trem', 		mensagem:'É por ordem de chegada, mas todos jagam'},
		{id: 4, apelido:'Flap Jack', 		mensagem:'Quantos times'},
		{id: 5, apelido:'Scooby-Doo', 		mensagem:'Pelo menos 3 confirmados'},
		{id: 6, apelido:'Dick Vigarista', 	mensagem:'Obahhh!'},
		{id: 7, apelido:'Darwin', 			mensagem:'Este vez eu jogo'},
		{id: 7, apelido:'Darwin', 			mensagem:'kkkk'}
	];
	
});