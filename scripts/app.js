	'use strict';

	angular.module('dotmxApp', [
		'ngResource',
		'ngSanitize',
		'ui.router',
		'ui.bootstrap',
		'duScroll'
	]).value('duScrollDuration', 750)
	.run(["$rootScope", "$state", "$stateParams",function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		return $rootScope.$stateParams = $stateParams;
	}])
  .config(function ($stateProvider, $urlRouterProvider) {
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$urlRouterProvider.otherwise('/');
	$stateProvider
	  .state('index', {
		url: '/',
		templateUrl: 'views/main.html',
		controller:'MainCtrl'
	  });
	  
  });