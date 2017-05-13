'use strict';
angular.module('starter')
.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    console.log("LoginCtrl");
	$scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})
