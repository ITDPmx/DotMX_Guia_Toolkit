'use strict';

angular.module('dotmxApp')
.directive('dotHeader', function () {
	return {
		templateUrl: 'views/dot-header.html',
		restrict: 'E',
	};
});