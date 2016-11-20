var H = {
	//导航条的滑块效果
	slidebarEffect:(function() {
		var $slideBar = $('#topnav .mainnav .slidebar');
		var $navWraper = $('#topnav .mainnav');
		var eventType = 'mouseover';
		var slideBarInitalPosition = $slideBar.position();
		var isReset = true;
		
		var getElemPosition = function($elem) {
			var positionObj = $elem.Position();
		}
		
		var setElemPosition = function($elem,positionObj) {
			$elem.css(positionObj);
		};
		
		var $subNav = $('#topnav .subnav');
		var toggleShowStatus = function($elem,isShow) {
			if (isShow === true) {
				$elem.show();
			} else {
				$elem.hide();
			}
		};
		var O = {
			run:function() {
				$navWraper.on(eventType,'.item',function() {
					var targetPosition = $(this).position();
					$slideBar.stop(true).animate(targetPosition,500);
					var index = $(this).index();
					var $currentSubNav = $subNav.eq(index);
					toggleShowStatus($currentSubNav,true);
					toggleShowStatus($currentSubNav.siblings('.subnav'),false);
				});
				if (isReset) {
					$navWraper.parent().on('mouseleave',function() {
						$slideBar.animate(slideBarInitalPosition);
						toggleShowStatus($subNav,false);
					});
				}
			},
		};
		return O;
	})(),
};
H.slidebarEffect.run();

$('#picture-show').slideBox({
	duration:0.3,
	delay:5,
	clickBarRadius:10
});