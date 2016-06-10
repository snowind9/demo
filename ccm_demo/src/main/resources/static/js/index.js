angular.module('snow_resizer', [])
	.directive('resizer', function($document, $window) {

	return function($scope, $element, $attrs) {
		var parentEl =  angular.element($document[0].getElementById("parent"));
		var topEl =  angular.element($document[0].getElementById("top"));
		var bottomEl =  angular.element($document[0].getElementById("bottom"));
		
		var selfOffsetTop = $element.prop("offsetTop");
		var topDIVHeight = selfOffsetTop - topEl.prop("offsetHeight");
		
//		console.log(selfOffsetTop);
//		console.log(topEl.prop("offsetHeight"));
//		console.log(topDIVHeight);//==40?
		
		var startflg = false;
		var startOffset = 0;
		
		var oldWindowHeight = $window.innerHeight;
		
		var oldParentHeight = parentEl.prop("offsetHeight")
		var origianlTopHeight = topEl.prop("offsetHeight");
		
		var newParentHeight = oldParentHeight;
//		console.log(newParentHeight);
		angular.element($window).bind('resize', function(){
	         var height = $window.innerHeight;
	         console.log(oldParentHeight);
	         console.log(height);
	         
	         newParentHeight = oldParentHeight/oldWindowHeight * height;
	         
	         parentEl.css({
				height: newParentHeight + 'px'
			 });
	         
//	         topEl.css({
//				height: newHeight + 'px'
//			 });
//	         var siderHeight = $element.prop("offsetHeight")
//	         bottomEl.css({
//				height: oldHeight - siderHeight - newHeight + 'px'
//			 });
        });
		
		
		$element.on('mousedown', function(event) {
			event.preventDefault();
			startOffset = 0;
			startflg = false;
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
		});

		function mousemove(event) {
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
//			console.log(event.pageY);
//			console.log(startflg);
			var minY = Number(topDIVHeight) + Number(topEl.css("min-height").replace("px",""));
			var maxY = Number(topDIVHeight) + Number(topEl.css("max-height").replace("px",""));
//			console.log(maxY);
			if (minY < event.pageY ) {
				console.log("change");
				if (startflg) {
					resize(startOffset);
				}
			}
		}
		
		function resize(startOffset){
			var oldHeight = topEl.prop("offsetHeight");
			var y = event.pageY;
			
			var rate = (y - startOffset - topDIVHeight) / newParentHeight;
//			
//			console.info(y - startOffset - topDIVHeight);
//			console.info(newParentHeight);
//			console.info(rate);
			
			topEl.css({
				height: rate * 100 + '%'
			});
			origianlTopHeight = topEl.prop("offsetHeight");
			
			var newHeight = topEl.prop("offsetHeight");
			var bottomHeight = bottomEl.prop("offsetHeight");
			var offset = newHeight - oldHeight
			if (bottomHeight - offset > 10 ) // assume min height is 10
			bottomEl.css({
				height: (1-rate) * 100 + '%'
			});
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});