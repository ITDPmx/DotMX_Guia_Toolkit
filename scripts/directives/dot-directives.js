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
})
.directive('slidersSection', function () {
	return {
		templateUrl: 'views/sections/sliders_section.html',
		restrict: 'E',
	};
})
.directive('mainSection', function () {
	return {
		templateUrl: 'views/sections/main_section.html',
		restrict: 'E',
	};
})
.directive('projectSection', function () {
	return {
		templateUrl: 'views/sections/project_section.html',
		restrict: 'E',
	};
})
.directive('toolsSection', function () {
	return {
		templateUrl: 'views/sections/tools_section.html',
		restrict: 'E',
	};
})
.directive('guideSection', function () {
	return {
		templateUrl: 'views/sections/guide_section.html',
		restrict: 'E',
	};
})
.directive('mapSection', function () {
	return {
		templateUrl: 'views/sections/map_section.html',
		restrict: 'E',
	};
})
.directive('strategiesSection', function () {
	return {
		templateUrl: 'views/sections/strategies_section.html',
		restrict: 'E',
	};
})
.directive('modelSection', function () {
	return {
		templateUrl: 'views/sections/model_section.html',
		restrict: 'E',
	};
});