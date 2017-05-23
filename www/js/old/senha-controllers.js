'use strict';
angular
	.module('starter!!!!!')
	.controller('SenhaCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $ionicModal, $location, senhaFactory) {
    
		console.log("SenhaCtrl");
		
		/* email*/
		$scope.senha = {email:""};
		/* email*/
		
		console.log($scope.senha);
		
		$scope.error = "";
		
		$scope.validaSenha = function(){
			
			console.log('validaSenha');
		}
		
		$scope.$parent.clearFabs();
		$timeout(function() {
			$scope.$parent.hideHeader();
		}, 0);
		
		ionicMaterialInk.displayEffect();
	});
