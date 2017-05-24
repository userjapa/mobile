'use strict';
angular.module('starter')
.controller('SalaCtrl', function($scope, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, $location, $ionicModal, configFactory, cadastroFactory, $ionicPopup) {
	console.log("SalaCtrl");
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
	//Lista de salas do usuario
	$scope.salas = configFactory.userSalas;
	//---------- function ----------
    /*
	 *	function getIndexOf(array, valor, propriedade)
	 *	int return(posicao)
	 *	pegar a posicao do array
	 **/
	var getIndexOf = function(arr, val, prop) {
		var tam = arr.length;
		var ini = 0;
      	for (ini=0; ini<tam; ini++) {
        	if (arr[ini][prop] == val) {
          		return ini;
        	}
      	}
      return false;
    }
	
	var index = getIndexOf($scope.salas, $stateParams.id, "id");
	
	//---------- function ----------
    //Dados da sala aberta
	$scope.sala = {
		id				: $stateParams.id,
		img				: $scope.salas[index]['img'], 
		nome			: $scope.salas[index]['nome'], 
		periodo			: $scope.salas[index]['periodo'],               
		esporte			: $scope.salas[index]['esporte'],             
		url				: $scope.salas[index]['url'], 
		sexo			: $scope.salas[index]['sexo'], 
		acessibilidade	: $scope.salas[index]['acessibilidade']
	};
	
});