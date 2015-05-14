'use strict';

angular.module('dotmxApp')
.directive('dotHeader', function () {
	return {
		templateUrl: 'views/dot-header.html',
		restrict: 'E',
	};
})
.directive('dotFooter', function () {
	return {
		templateUrl: 'views/dot-footer.html',
		restrict: 'E',
	};
});