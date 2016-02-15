(function(){
	$btn_socials = $('.btn-social');

	// SETTINSG
	// ------------------------------------
		var _popup = {
			scrollbar 	: 'scrollbar=yes',
			width 		: 640,
			height 		: 320,
		}
		var twitter = {
			share : 'https://twitter.com/intent/tweet?text=[title]&via=[via]&url=[url]',
			via : 'qthenoz'
		};
		var fb = {
			share : 'https://www.facebook.com/share.php?u=[url]', 
		};

		var gplus = {
			share : 'https://plus.google.com/share?url=[url]'
		};


	$(document).on('click', $btn_socials, function(e){
		e.preventDefault();
		var shareUrl;
		var $target = $(e.target);
		var title 	= encodeURIComponent(document.title);
		var url 	= encodeURIComponent($target.attr('data-url'));
		var name 	= 'Partage';
		
		switch ($target.attr('data-btn')){
			case 'facebook':
				shareUrl 	= fb.share.replace('[url]', url);
				name 		= 'Partager sur Facebook'
			break;
			case 'twitter':
				shareUrl = twitter.share.replace('[url]', url);
				shareUrl = twitter.share.replace('[title]', title);
				shareUrl = twitter.share.replace('[via]', encodeURIComponent(twitter.via));
				name 	 = 'Partager sur Twitter'
			break;
			case 'gplus':
				shareUrl = gplus.share.replace('[url]', url);
				name 	 = 'Partager sur Google+'
			break;
		}
		var popup = popupCenter(shareUrl, name);
	});

	// FUNCTIONS
	// ------------------------------------
		var popupCenter = function(url, title, width, height){
			var popupWidth 	= width || _popup.width;
			var popupHeight = height || _popup.height;
			var windowLeft 	= window.screenLeft || window.screenX;
			var windowTop 	= window.screenTop || window.screenY;
			var windowWidth 	= window.innerWidth || document.documentElement.clientWidth;
			var windowHeight 	= window.innerHeight || document.documentElement.clientHeight;
			var popupLeft 	= windowLeft + windowWidth/2 - popupWidth/2;
			var popupTop 	= windowTop + windowHeight/2 - popupHeight/2;
			// console.log(popupLeft);
			// console.log(popupTop);
			var popup = window.open(
				url, title, 
				_popup.scrollbar+', '+
				'width='+popupWidth+', '+
				'height='+popupHeight+', '+
				'top= '+popupTop+','+
				'left='+popupLeft
			);
			popup.focus();
			return true;
		}

})(jQuery);
