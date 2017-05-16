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
    
	$scope.classApelido    = 'normal'; 
	$scope.classNome       = 'normal'; 
	$scope.classNascimento = 'normal'; 
	$scope.classCep        = 'normal'; 
	$scope.classSexo       = 'normal'; 
	$scope.classPerfil     = 'normal'; 
	//Funcoes
	$scope.mudaCor= function(obj){
		if(obj=='apelido'){
			$scope.classApelido = 'alerta'; 
		}
		if(obj=='nome'){
			$scope.classNome = 'alerta'; 
		}
		if(obj=='nascimento'){
			$scope.classNascimento = 'alerta'; 
		}
		if(obj=='cep'){
			$scope.classCep = 'alerta'; 
		}
		if(obj=='sexo'){
			$scope.classSexo = 'alerta'; 
		}
		if(obj=='perfil'){
			$scope.classPerfil = 'alerta'; 
		} 
	}
	
	$scope.verificaConteudo = function(obj){
		if(obj=='apelido'){
			$scope.classApelido = 'correto'; 
		}
		if(obj=='nome'){
			$scope.classNome = 'correto'; 
		}
		if(obj=='nascimento'){
			$scope.classNascimento = 'correto'; 
		}
		if(obj=='cep'){
			$scope.classCep = 'correto'; 
		}
		if(obj=='sexo'){
			$scope.classSexo = 'correto'; 
		}
		if(obj=='perfil'){
			$scope.classPerfil = 'correto'; 
		}
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
