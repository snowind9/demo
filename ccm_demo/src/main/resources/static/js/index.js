angular.module('snow_resizer', [])

.directive('autoheight', function($document, $window) {
	return function($scope, $element, $attrs) {
		var h = $element.prop("clientHeight");
		$scope.watchTopHeight= 0.5;
		$scope.watchBottomHeight= 0.5;
        
        $scope.innerTopStyle = {
        	"height" :  (0.5 * h -38) / (0.5 * h) * 100 + "%",
        	"overflow-y" : "auto"
        }
        
        $scope.innerBottomStyle = {
            	"height" :  (0.5 * h -38) / (0.5 * h) * 100 + "%",
            	"overflow-y" : "auto"
            }
        
        $scope.autoInnerHieght = false;
        $scope.$on('onfullscreen', function (event, args){
        	$scope.autoInnerHieght = args;
        	$scope.$digest();
        });
        	
        
        $scope.$watch
	    (
	        function () {
	            return  $scope.autoInnerHieght;
	        },
	        function (newValue, oldValue) {
//	        	console.log(newValue);
	            if (newValue != oldValue) {
		        	h = $element.prop("clientHeight");
	           		 console.log($element.prop("clientHeight"));
	            	if (newValue) {
	            		$scope.innerTopStyle.height = "88%"
	            		$scope.innerBottomStyle.height =  "88%"
	            	} else {
	            		$scope.innerTopStyle.height = (h * $scope.watchTopHeight -38) / (h * $scope.watchTopHeight) * 100 + "%"
	            		$scope.innerBottomStyle.height = (h * $scope.watchBottomHeight -38) / (h * $scope.watchBottomHeight) * 100 + "%"
	            	}
	            }
	        }
	    );
        
		$scope.$watch
	    (
	        function () {
	            return  $scope.watchTopHeight;
	        },
	        function (newValue, oldValue) {
	            if (newValue != oldValue) {

           		 console.log($scope.watchTopHeight);
           		 console.log($element.prop("clientHeight"));
	            	h = $element.prop("clientHeight");
	            	$scope.innerTopStyle.height = (newValue * h -38) / (newValue * h) * 100 + "%"
	            }
	        }
	    );
		
		$scope.$watch
	    (
	        function () {
	            return  $scope.watchBottomHeight;
	        },
	        function (newValue, oldValue) {
	            if (newValue != oldValue) {

           		 console.log($scope.watchBottomHeight);
		        	 h = $element.prop("clientHeight");
		        	 $scope.innerBottomStyle.height = (newValue * h -38) / (newValue * h) * 100 + "%"
	            }
	        }
	    );
		
		$scope.$watch
	    (
	        function () {
	            return  $scope.fullHeight;
	        },
	        function (newValue, oldValue) {
	            if (newValue != oldValue) {
	            	 if (newValue) {
	            		 $scope.innerTopStyle.height = (newValue * $scope.watchTopHeight -38) / (newValue * $scope.watchTopHeight) * 100 + "%"
	            		 $scope.innerBottomStyle.height = (newValue * $scope.watchBottomHeight -38) / (newValue * $scope.watchBottomHeight) * 100 + "%"
	            	 }
	            }
	        }
	    );
	};
})

.directive('fullscreen', function($document, $window) {
	
	return {
		restrict: "EA",
		scope: false,
		link : function($scope, $element) {
			$scope.fullscreen = false;
			$element.on('click', function(event) {
				$scope.fullscreen = !$scope.fullscreen;
				$scope.$digest();
				$scope.$emit('onfullscreen',$scope.fullscreen);
			})
		}
	};
})

.directive('resizer', function($document, $window) {

	return function($scope, $element, $attrs) {
//		console.log($attrs.resizer);
		var parentEl =  angular.element($document[0].getElementById($attrs.parent));
		var topEl =  angular.element($document[0].getElementById($attrs.partone));
		var bottomEl =  angular.element($document[0].getElementById($attrs.parttwo));
		
		var startflg = false;
		// init
		if ($attrs.resizer == 'h') {
			var selfOffsetTop = $element.prop("offsetTop");
			var topDIVHeight = selfOffsetTop - topEl.prop("offsetHeight");
			console.log(topDIVHeight);
			parentEl.css({
				height: $window.innerHeight - topDIVHeight + 'px'
		    });
			
			var startOffset = 0;
			
			var oldWindowHeight = $window.innerHeight;
			
			var oldParentHeight = parentEl.prop("offsetHeight")
			var origianlTopHeight = topEl.prop("offsetHeight");
			
			var newParentHeight = oldParentHeight;
		} else if ($attrs.resizer == 'v') {
			var allWidth;
			
			var parentWidht = parentEl.prop("offsetWidth");
//			console.log(parentWidht);
//			console.log( $element.prop("offsetWidth"));
			var initWidth = (parentWidht - $element.prop("offsetWidth") * 2) / 3;
			var initRate = initWidth / parentWidht * 100;
			topEl.css({
				width: initRate + '%'
			});
			bottomEl.css({
				width: initRate + '%'
			});
//			console.log(initRate);
			var totalRate ;
		}

		angular.element($window).bind('resize', function(){
	         
			if ($attrs.resizer == 'v') {
				parentWidht = $window.innerWidth; //? parent width = window.width,
			}
	         // newParentHeight = oldParentHeight/oldWindowHeight * height; 
	         if ($attrs.resizer == 'h') {
	        	 var height = $window.innerHeight;
	        	 var top = parentEl.prop("offsetTop")
	        	 newParentHeight = height - parentEl.prop("offsetTop"); 
		         if (newParentHeight) {
		        	 parentEl.css({
		 				height: newParentHeight + 'px'
		 			 });
		 			 $scope.fullHeight = newParentHeight;

//		 			 console.log(height);
//		 			 console.log($scope.fullHeight);
		 			 $scope.$digest();
		         }
	         }
	         
        });
		
		
		$element.on('mousedown', function(event) {
			event.preventDefault();
			
			if ($attrs.resizer == 'h') {
				startOffset = 0;
				startflg = false;
			} else if ($attrs.resizer == 'v') {
			    allWidth = topEl.prop("offsetWidth") + bottomEl.prop("offsetWidth");
			    totalRate = allWidth / parentWidht * 100;
//			    console.log(totalRate);
			    
			}
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {
			if ($attrs.resizer == 'h') {
				horizontalMove(event)
			}
			if ($attrs.resizer == 'v') {
				verticalMove(event)
			}
		}
		
		function verticalMove(event) {
			var halfH = Math.floor($element.prop("offsetWidth") / 2);
			var min = $element.prop("offsetLeft");
			var max = $element.prop("offsetLeft") + $element.prop("offsetWidth");
			var mid = $element.prop("offsetLeft") + halfH;
			
			if (startflg || event.pageX <= min || event.pageX >= max || event.pageX == mid) {
				if (event.pageX <= min) startOffset = 0;
				if (event.pageX == mid) startOffset = halfH;
				if (event.pageX >= max) startOffset = $element.prop("offsetWidth");
				startflg = true;
			}
			
			if (startflg) {
				var x = event.pageX;
				var rate =  (x - startOffset - topEl.prop("offsetLeft")) / parentWidht * 100;
//				console.log("totalRate:" + totalRate);
//				console.log("rate:" + rate);
				
				topEl.css({
					width: rate + '%'
				});

				rate2 = (totalRate * 100000 - rate * 100000) /100000;
				bottomEl.css({
					width: rate2 + '%'
				});
//				console.log(totalRate - rate);
			}
		}
		
		function horizontalMove(event) {
			var halfH = Math.floor($element.prop("offsetHeight") / 2);
			var min = $element.prop("offsetTop");
			var max = $element.prop("offsetTop") + $element.prop("offsetHeight");
			var mid = $element.prop("offsetTop") + halfH;
			
			if (startflg || event.pageY <= min || event.pageY >= max || event.pageY == mid) {
				if (event.pageY <= min) startOffset = 0;
				if (event.pageY == mid) startOffset = halfH;
				if (event.pageY >= max) startOffset = $element.prop("offsetHeight");
				startflg = true;
			}
			var minY = Number(topDIVHeight) + Number(topEl.css("min-height").replace("px",""));
			var maxY = Number(topDIVHeight) + Number(topEl.css("max-height").replace("px",""));
			if (minY < event.pageY ) {
				if (startflg) {
					horizontalResize(startOffset);
				}
			}
		}
		
		function horizontalResize(startOffset) {
			var oldHeight = topEl.prop("offsetHeight");
			var y = event.pageY;
			
			var rate = (y - startOffset - topDIVHeight) / newParentHeight;
//			
			topEl.css({
				height: rate * 100 + '%'
			});
			origianlTopHeight = topEl.prop("offsetHeight");
			
			var newHeight = topEl.prop("offsetHeight");
			var bottomHeight = bottomEl.prop("offsetHeight");
			var offset = newHeight - oldHeight
			bottomEl.css({
				height: (1-rate) * 100 + '%'
			});
			
			$scope.watchTopHeight = rate ;
			$scope.watchBottomHeight = (1-rate);
			$scope.$digest();
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});