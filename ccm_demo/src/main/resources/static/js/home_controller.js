var dashboard = angular.module('home', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'smart-table']);

dashboard.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home', {
	}).state('search', {
		url : '/search',
		controller: ListController,
		templateUrl : '/search.html'
	}).state('dashboard', {
		url : '/dashboard',
		controller: dashboardController,
		templateUrl : '/dashboard.html'
	}).state('dashboard2', {
		url : '/dashboard2',
		controller: dashboardController,
		templateUrl : '/dashboard2.html'
	}).state('dashboard3', {
		url : '/dashboard3',
		controller: dashboardController,
		templateUrl : '/dashboard3.html'
	});
}).run(function($rootScope) {
	$rootScope.phone = 'off';
	$rootScope.activeWin='';
})

// Publish our messages for the list template
function ListController($rootScope , $state, $scope, $filter) {
	
	$scope.rowCollection = [
		                       {firstName: '山田', lastName: '太郎', account: '123456', prospectNo: '8001234567', postcode: '123-4567', address : '住所住所住所住所住所住所住所住所住所住所', tel :'0312345678',         email: 'whatever@gmail.com',branch:'001'},
		                       {firstName: '山田', lastName: '太郎', account: '432134', prospectNo: '8001233337', postcode: '123-4227', address : '住所住所住所住所住所住所住所住所住所住所住所住所住所',tel :'0312345678', email: 'oufblandou@gmail.com',branch:'001'},
		                       {firstName: '山田', lastName: '太郎', account: '243241', prospectNo: '8002323267', postcode: '002-7543', address : '住所住所住所住所住所住所住所住所住所住所',    tel :'0312345678',	       email: 'raymondef@gmail.com',branch:'001'}
		                   ];
	
	$rootScope.phone = 'off';
	$rootScope.barText = '';
	$rootScope.disabled = false;
	
	$scope.openDashboard = function openDashboard(row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
        	$state.go('dashboard', index);
        }
    }
}

// Get the message id from the route (parsed from the URL) and use it to
// find the right message object.
function dashboardController($rootScope) {
    $rootScope.barText = 'calling 031234567 通話開始日時 2016/05/21 11:49:33     通話時間 00:00:00';
	$rootScope.phone = 'on';
}

dashboard.controller("panelController", function ($scope, $http, $attrs) {
	
	$scope.fullscreen = false;
	$scope.name='顧客別手数料';
	$scope.detail1 = function () { 
		$scope.htmlname="detail.html";
		$scope.rowCollection = [
			                       {firstName: '5', lastName: '5', birthDate: 5, balance: 5, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5}
			                   ];
	}
	
	$scope.detail2 = function () { 
		$scope.htmlname="detail2.html";
		$scope.rowCollection = [
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5}
			                   ];
	};
	
	$scope.detail3 = function () { 
		$scope.htmlname="documentRequest.html";
	};
	
	$scope.detail4 = function () { 
		$scope.htmlname="customerInfo.html";
	};
	if ($attrs.name == "w001") {
		$scope.detail1();
	}
	if ($attrs.name == "w002") {
		$scope.detail2();
	}
	if ($attrs.name == "w003") {
		$scope.detail3();
	}
	if ($attrs.name == "w004") {
		$scope.detail4();
	}
		
	
});

dashboard.controller('customerInfoCtrl', function ($scope) {
	  $scope.isCollapsed = true;
});


dashboard.controller('searchCtrl', function ($scope, $state) {
	$scope.two = function (){
		$state.go("dashboard2");
	};
	$scope.four = function (){
		$state.go("dashboard");
	};
	$scope.six = function (){
		$state.go("dashboard3");
	};
});


