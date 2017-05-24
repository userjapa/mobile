'use strict';
angular.module('starter')
.controller('SalasCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, cadastroFactory, $ionicPopup) {
    
	console.log("SalasCtrl");
	
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    
	ionicMaterialInk.displayEffect();
	
	
	//---------- Lista de Salas -------
	$scope.salas = [
					{id:1, img:'../img/brasao/bigodegrosso.jpg',   nome:'Bigode Grosso',  periodo:'Quarta 21h',               esporte:'Futebol de Campo',             url:'app.intro', sexo:'m', acessibilidade:'nao'},
					{id:2, img:'../img/brasao/dumbartonfc.png',    nome:'Dumbarton FC',   periodo:'Terça e Quinta 20:30h',    esporte:'Futebol de Sete',              url:'app.intro', sexo:'f', acessibilidade:'sim'},
					{id:3, img:'../img/brasao/escudos.gif',        nome:'escudos',        periodo:'Segunda Quarta Sexta 22h', esporte:'Basquete', 					url:'app.intro', sexo:'m', acessibilidade:'nao'},
					{id:4, img:'../img/brasao/guangzhou.png',      nome:'guangzhou',      periodo:'Terça 20h',                esporte:'Volei sentado', 				url:'app.intro', sexo:'a', acessibilidade:'sim'},
					{id:5, img:'../img/brasao/madfoz.png',         nome:'madfoz',         periodo:'Quinta 19h30',   		    esporte:'Volei de Praia', 				url:'app.intro', sexo:'f', acessibilidade:'nao'},
					{id:6, img:'../img/brasao/manchester.jpg',     nome:'manchester',     periodo:'Domingo 16h', 			    esporte:'Futebol de Salão', 			url:'app.intro', sexo:'m', acessibilidade:'nao'},
					{id:7, img:'../img/brasao/unionminas.jpg',     nome:'unionminas',     periodo:'Todos os Dias 19h', 		esporte:'Basquete em Cadeira de Rodas', url:'app.intro', sexo:'m', acessibilidade:'sim'}
				];
	
	//---------- /Lista de Salas -------
	//---------- Funcoes -------
	$scope.abrirSala = function(sala){
		$location.params();
		$location.path('app.sala?id='+sala);
	}
	
	//---------- /Funcoes -------
	
	//---------- Efeito ----------
	// Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 100);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
	//---------- /Efeito ----------
});
