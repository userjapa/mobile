'use strict';
angular.module('starter')
.controller('SenhaCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, senhaFactory, $ionicPopup) {
    console.log("SenhaCtrl");
	
	/* Objeto senha*/
	$scope.senha = {
			email:""
		};
	console.log($scope.senha);
	
	//Vars	
	$scope.sucesso = false;
	$scope.error = "";
	
	$scope.validaSenha = function(objSenha){
		console.log(objSenha);
		$scope.sucesso = senhaFactory.validaSenha(objSenha);
		if($scope.sucesso){
			//$location.url("app/login");
			$scope.showAlert();
			//$scope.getDataOpenModal();
			console.log("Sucesso");
		}else{
			console.log("Erro");
			$scope.error = "Campo e-mail em branco.";
		}
	}
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    
	//---------- PopUp ----------
	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Sucesso',
			template: 'Senha enviada para o e-mail: ' + $scope.senha.email
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
	
})
