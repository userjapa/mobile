'use strict';
angular.module('starter')
.controller('CadastroCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $ionicModal) {
    
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
		senha		:'',
		senharepetir:''
	};
	/* Cadastro*/
	
	
	console.log($scope.$id);
	
	
	/* Modal */
	$ionicModal.fromTemplateUrl('my-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'	
	}).then(function(modal) {
		console.log($scope.$id);
    	$scope.modal = modal;
	});
	
	$scope.openModal = function() {
		$scope.modal.show();
	};
	
	$scope.closeModal = function() {
		$scope.modal.hide();
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
	
});
