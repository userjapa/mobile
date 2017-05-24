'use strict';
angular.module('starter')
.controller('SalasCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, configFactory, cadastroFactory, $ionicPopup) {
    console.log("SalasCtrl");
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
	
	//---------- Lista de Salas -------
	$scope.salas = configFactory.userSalas;
		
});