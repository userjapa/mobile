'use strict';
angular.module('starter')
.controller('SenhaCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $ionicModal, $location, senhaFactory) {
    console.log("SenhaCtrl");
	
	/* email*/
	$scope.senha = {email:""};
	/* email*/
	
	console.log($scope.senha);
	
	$scope.error = "";
	
	$scope.validaLogin = function(){
		
		if(senhaFactory.validaSenha($scope.senha)){
			
			//$location.url("app/login");
			$scope.openModal();
		}else{
			$scope.error = "Campo e-mail em branco.";
		}
	}
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    
	ionicMaterialInk.displayEffect();
	
	
	/* Modal */
	$ionicModal.fromTemplateUrl('senha-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'	
	}).then(function(modal) {
		$scope.modal = modal;
	});
	
	$scope.openModal = function() {
		$scope.modal.show();
	};
	
	$scope.closeModal = function() {
		$scope.modal.hide();
		$location.url("/");
		
	};
	
	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});
	
	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
    	// Execute action
   	});
	
	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
    	// Execute action
	});
	/* Modal */
})
