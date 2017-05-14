'use strict';
angular.module('starter')
.controller('ConfigCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, configFactory) {
    console.log("ConfigController");
	// Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);
	
	//config
	$scope.config = {
		nome       : configFactory.nome,
    	apelido    : configFactory.apelido,
		nascimento : configFactory.nascimento,
		cep        : configFactory.cep,
		sexo       : configFactory.sexo,
		perfil     : configFactory.perfil,
		esportes   : []
	}
    
	
	// Set Motion
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

    // Set Ink
    ionicMaterialInk.displayEffect();
	/**/
});
