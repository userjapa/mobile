'use strict';
angular.module('starter')
.controller('SalaCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, cadastroFactory, $ionicPopup) {
    
	console.log("SalaCtrl");
	
	
  	$scope.sala = {
			id: $stateParams.id
		};
	
	
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    
	ionicMaterialInk.displayEffect();
	
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
