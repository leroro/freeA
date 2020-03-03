$(function () {
	$('#titlebar').load('inc-titlebar.html', function () {});
	// $('#gnb').load('_inc-gnb.html', function () {});
	// 	if ($('#header').hasClass('extend-open')) {
	// 		$('.extend-container').show();
	// 	}

	// $('#allmenu').load('_inc-allmenu.html', function () {
	// 	// if ($.isFunction(window.snbSetting)) snbSetting();
	// });
	$('#tabbar').load('inc-tabbar.html', function () {
		var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
		$('#tabbar a').each(function () {
			if ($(this).attr('href') == thisfilefullname) {
				$(this).parent('li').addClass('on');
			}
		});
	});
});