'use strict';
angular.module('starter')
.controller('CadastroCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, cadastroFactory, $ionicPopup) {
    
	console.log("CadastroCtrl");
	
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    
	ionicMaterialInk.displayEffect();
	
	/* Cadastro*/
	$scope.cadastro = {
		nome		:'',
		email		:'',
		termo		:''
	};
	
	//Vars	
	$scope.sucesso = false;
	$scope.error = "";
	
	$scope.validaCadastro = function(objCadastro){
		console.log(objCadastro);
			$scope.sucesso = cadastroFactory.validaCadastro(objCadastro);
			if($scope.sucesso){
				//$location.url("app/login");
				$scope.showAlert();
				console.log("Sucesso");
			}else{
				console.log("Erro");
				$scope.error = "Você precisa aceitar os Termos de uso e Politica e Privacidade";
			}
		
	}
	
	//---------- PopUp  ----------
	
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Sucesso',
			template: 'Senha enviada para o e-mail: ' + $scope.cadastro.email
		});
	
		alertPopup.then(function(res) {
			$location.url("app/login");
		});
	};
	//---------- /PopUp ----------
	
	
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
