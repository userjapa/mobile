'use strict';
angular.module('starter')
.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, loginFactory) {
    
	$scope.login = {
		email:"",
		senha:"",
	}
	
	$scope.error  = "";
	
	$scope.validaLogin = function(){
		if($scope.login.email==""||$scope.login.senha==""){
			$scope.error = "Campo(s) em branco.";
		}else{
			if(loginFactory.validaLogin($scope.login)){
				$location.url("app/intro");
			}else{
				$scope.error = "Login e/ou senha incorreto(s).";
			}
		}
	}
	
	$scope.focus = function(){
		$scope.error = "";
	}
	
	$scope.$parent.clearFabs();
    
	$timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
	
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
	
})