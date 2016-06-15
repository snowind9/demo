var dashboard = angular.module('home', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'smart-table','snow_resizer','ui.bootstrap.contextMenu']);


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
	$rootScope.color = false;
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

dashboard.controller("panelController", function ($element, $scope, $http, $attrs) {
	$scope.menuOptions = [
	                      ['基本情報', function () {
	                    	  $scope.detail4();
	                      }],
	                      ['保有明細', [
	     	                          ['投資信託', function () {
	     	                              alert();
	     	                          }],
	     	                          ['株式', function () {
	     	                              alert();
	     	                          }],
	     	                          ['保有明細_毎月20日時点の投信残高', function () {
	     	                              alert();
	     	                          }]
	     	                      ]],
	                      ['顧客明細', function () {
	                    	  $scope.detail1();
	                      }],
	                      ['取引履歴', [
	                          ['株式注文履歴', function () {
	                              alert();
	                          }],
	                          ['取引履歴(GFAS)', function () {
	                              alert();
	                          }],
	                          ['取引履歴(SONAR)', function () {
	                              alert();
	                          }],
	                          ['出金請求履歴', function () {
	                              alert();
	                          }],
	                          ['損益通算', function () {
	                              alert();
	                          }],
	                          ['投信注文履歴', function () {
	                              alert();
	                          }],
	                          ['投信分配金', function () {
	                              alert();
	                          }],
	                          ['入出金履歴', function () {
	                              alert();
	                          }],
	                          ['入出庫履歴', function () {
	                              alert();
	                          }]
	                      ]],
	                      ['登録金融機関', [
 	                          ['SBS引落金融機関', function () {
 	                              alert();
 	                          }],
 	                          ['出金先金融機関', function () {
 	                              alert();
 	                          }]
 	                      ]],
	                      ['SBS', [
	                          ['SBS登録状況', function () {
	                              alert();
	                          }],
	                          ['SBS登録履歴', function () {
	                              alert();
	                          }]
	                      ]],
	                      ['顧客別手数料',  function () {
                              alert();
                          }],
	                      ['NISA',  function () {
                              alert();
                          }],
	                      ['資料請求', [
	                          ['資料請求履歴', function () {
	                              alert();
	                          }],
	                          ['資料発送入力', function () {
	                              alert();
	                          }]
	                      ]],
	                      ['コンタクト履歴', [
	                          ['コンタクト入力', function () {
	                              alert();
	                          }],
	                          ['コンタクト履歴', function () {
	                              alert();
	                          }],
	                          ['例外事項表示', function () {
	                              alert();
	                          }]
	                      ]],
	                      ['分配金', [
	                          ['分配金自動振込金融機関', function () {
	                              alert();
	                          }],
	                          ['分配金振込設定銘柄の有', function () {
	                              alert();
	                          }]
	                      ]]
	                  ];
	
	$scope.names=['', '' ,'' ];
	$scope.active = 0;
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
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '1', lastName: '2', birthDate: 3, balance: 4, email: 5},
			                       {firstName: '9', lastName: '9', birthDate: 9, balance: 9, email: 9}
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
	
	$scope.blank = function () { 
		$scope.htmlname="";
	};
	

	
	$scope.activityFuncs=[$scope.detail1,$scope.blank ,$scope.blank ];
		
	$scope.tabclick = function (act) { 
		$scope.active = act;
		var func = $scope.activityFuncs[act];
		if (func){
			func();
		}
		
	};
	
	var menuListNames = [{name:'顧客別手数料', func:$scope.detail1},
	                     {name:'顧客明細', func:$scope.detail2},
	                     {name:'保有明細', func:$scope.detail3},
	                     {name:'SBS', func:$scope.detail4}
	                     ];
	
	$scope.changeMenu = function (index){
		$scope.names[$scope.active]=menuListNames[index].name;
		menuListNames[index].func();
		$scope.activityFuncs[$scope.active] = menuListNames[index].func;
	}
	
	if ($attrs.name == "w001") {
		$scope.changeMenu(0);
	}
	if ($attrs.name == "w002") {
		$scope.changeMenu(2);
	}
	if ($attrs.name == "w003") {
		$scope.changeMenu(3);
	}
	if ($attrs.name == "w004") {
		$scope.changeMenu(1);
	}
});

dashboard.controller('customerInfoCtrl', function ($scope , $rootScope) {
	  $scope.changeColor = function (){
		  $rootScope.color = ! $rootScope.color;
	  }
	  
	  $scope.class1 = 0;
	  $scope.tipNames1 = ['特定源あり', '特定源なし', '一般' ];
	  
	  $scope.class2 = 0;
	  $scope.tipNames2 = ['ワーニングあり' , 'ワーニングなし'];
	  
	  $scope.class3 = 0;
	  $scope.tipNames3 = ['株式口座あり' , '株式口座なし'];
	  
	  $scope.class4 = 0;
	  $scope.tipNames4 = ['NISA口座' , 'ジュニアNISA'];
	  
	  $scope.class5 = 0;
	  $scope.tipNames5 = ['Y客' , ''];
	  
	  $scope.class6 = 0;
	  $scope.tipNames6 = ['印鑑登録なし' , '印鑑登録'];
	  
	  $scope.class7 = 0;
	  $scope.tipNames7 = ['高齢者【80歳以上】' , '高齢者【75歳～79歳】', '成人', '未成年'];
	  
	  $scope.class8 = 0;
	  $scope.tipNames8 = ['印鑑登録なし',''];
	  
	  $scope.class9 = 0;
	  $scope.tipNames9 = ['口座閉鎖',''];
	  
	  $scope.class10 = 0;
	  $scope.tipNames10 = ['初回ログインなし',''];
	  
	  $scope.tipOpen1 = function() {
		  $scope.class1 = ($scope.class1 + 1)%3;
	  }
	  
	  $scope.tipOpen2 = function() {
		  $scope.class2 = ($scope.class2 + 1)%2;
	  }
	  $scope.tipOpen3 = function() {
		  $scope.class3 = ($scope.class3 + 1)%2;
	  }
	  $scope.tipOpen4 = function() {
		  $scope.class4 = ($scope.class4 + 1)%2;
	  }
	  $scope.tipOpen5 = function() {
		  $scope.class5 = ($scope.class5 + 1)%2;
	  }
	  $scope.tipOpen6 = function() {
		  $scope.class6 = ($scope.class6 + 1)%2;
	  }
	  $scope.tipOpen7 = function() {
		  $scope.class7 = ($scope.class7 + 1)%4;
	  }
	  $scope.tipOpen8 = function() {
		  $scope.class8 = ($scope.class8 + 1)%2;
	  }
	  $scope.tipOpen9 = function() {
		  $scope.class9 = ($scope.class9 + 1)%2;
	  }
	  $scope.tipOpen10 = function() {
		  $scope.class10 = ($scope.class10 + 1)%2;
	  }
	  $scope.reset = function() {
		  $scope.class10 =0;
		  $scope.class9 =0;
		  $scope.class8 =0;
	  }
	  
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


