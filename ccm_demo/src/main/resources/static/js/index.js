angular.module('snow_resizer', [])
	.directive('resizer', function($document, $window) {

	return function($scope, $element, $attrs) {
		console.log($attrs.resizer);
		var parentEl =  angular.element($document[0].getElementById($attrs.parent));
		var topEl =  angular.element($document[0].getElementById($attrs.partone));
		var bottomEl =  angular.element($document[0].getElementById($attrs.parttwo));
		
		var startflg = false;
		// init
		if ($attrs.resizer == 'h') {
			var selfOffsetTop = $element.prop("offsetTop");
			var topDIVHeight = selfOffsetTop - topEl.prop("offsetHeight");
			
			var startOffset = 0;
			
			var oldWindowHeight = $window.innerHeight;
			
			var oldParentHeight = parentEl.prop("offsetHeight")
			var origianlTopHeight = topEl.prop("offsetHeight");
			
			var newParentHeight = oldParentHeight;
	        parentEl.css({
					height: $window.innerHeight - topDIVHeight + 'px'
			 });
		} else if ($attrs.resizer == 'v') {
			var allWidth;
			
			var parentWidht = parentEl.prop("offsetWidth");
			console.log(parentWidht);
			console.log( $element.prop("offsetWidth"));
			var initWidth = (parentWidht - $element.prop("offsetWidth") * 2) / 3;
			var initRate = initWidth / parentWidht * 100;
			topEl.css({
				width: initRate + '%'
			});
			bottomEl.css({
				width: initRate + '%'
			});
			console.log(initRate);
			var totalRate ;
		}

		angular.element($window).bind('resize', function(){
	         var height = $window.innerHeight;
	         
	         parentWidht = $window.innerWidth; //? parent width = window.width,
	          
	         newParentHeight = oldParentHeight/oldWindowHeight * height;
	         
	         parentEl.css({
				height: newParentHeight + 'px'
			 });
        });
		
		
		$element.on('mousedown', function(event) {
			event.preventDefault();
			
			if ($attrs.resizer == 'h') {
				startOffset = 0;
				startflg = false;
			} else if ($attrs.resizer == 'v') {
			    allWidth = topEl.prop("offsetWidth") + bottomEl.prop("offsetWidth");
			    totalRate = allWidth / parentWidht * 100;
			    console.log(totalRate);
			    
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
				console.log("totalRate:" + totalRate);
				console.log("rate:" + rate);
				
				topEl.css({
					width: rate + '%'
				});

				rate2 = (totalRate * 100000 - rate * 100000) /100000;
				bottomEl.css({
					width: rate2 + '%'
				});
				console.log(totalRate - rate);
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
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});