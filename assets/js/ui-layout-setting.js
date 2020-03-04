$(function () {
	$('#titlebar').load('inc-titlebar.html', function () {});
	$('#tabbar').load('inc-tabbar.html', function () {
		var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
		console.log(thisfilefullname);

		$('#tabbar a').each(function () {
			if ($(this).attr('href') == thisfilefullname) {
				$(this).parent('li').addClass('on');
			} else if (thisfilefullname == '') {
				// 인덱스
				$('#tabbar li:first-child').addClass('on');
			}
		});
	});
});