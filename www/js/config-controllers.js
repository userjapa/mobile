'use strict';
angular.module('starter')
.controller('ConfigCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, configFactory, $ionicPopup, $location) {
    console.log("ConfigController");
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
	//Lista de esportes disponiveis no sistema
	$scope.esportes = configFactory.listaEsportes;
	
	//---------- Funcoes ----------
    /*
	 *	checkEsporte()
	 *  
	 *	ajusta (on, off) no evento 
	 *	onclick do div do input.check 
	 *  
	 **/
	$scope.checkEsporte = function(id){
		var ind = id.split('_');
		if(document.getElementById(id).checked == true){
			document.getElementById(id).checked = false
			$scope.config.esportes[ind[1]].status = false;
		}else{
			document.getElementById(id).checked = true
			$scope.config.esportes[ind[1]].status = true;
		}
		//console.log($scope.config.esportes[ind[1]].status);
	}
	
	/*
	 *	validaConfig()
	 *  
	 *	Valida o form config 
	 *	 
	 **/
	$scope.validaConfig = function(objConfig){
		//console.log(objConfig);
		/**/
		if(configFactory.validaConfig(objConfig)){
			//$scope.showAlert('Sucesso','Configuracao da conta atualizada com sucesso!');
			$scope.showPopup();
		}else{
			$scope.showAlert('Erro','Houve um erro ao atualizar a a conta!');
		}
		/**/
	}
	//---------- /Functions ----------
	
	//---------- PopUp ----------
	// Triggered on a button click, or some other target
	$scope.showPopup = function() {
		$scope.data = {}
	
		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
		template: '<div>Configuração atualizada com sucesso!</div>',
		title: 'Sucesso',
		subTitle: 'Configuração do sistema',
		scope: $scope,
		buttons: [
	 		/*{ text: 'Continuar aqui', type: 'button-positive'},*/
	 		/*
			{ text: 'Ir para intro',type: 'button-positive',	onTap: function(e) {
		 			if (!$scope.data.wifi) {
		   				//don't allow the user to close unless he enters wifi password
		   				e.preventDefault();
		 			} else {
		   				return $scope.data.wifi;
		 			}
	   			}
	 		},
			*/
		]
	});
	
	myPopup.then(function(res) {
		console.log('Show PopUp OK!!');
	});
	
	$timeout(function() {
		myPopup.close(); //close the popup after 3 seconds for some reason
		}, 3000);
	};
	//---------- /PopUp ----------
	
});
