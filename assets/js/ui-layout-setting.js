/* 
	본 JS는 퍼블리싱 편의를 위해 
	중복되는 공통 레이아웃 영역을 로드할 목적으로 작성된 문서입니다.
	서버 언어로 레이아웃을 구성하게되면 오류를 유발하는 코드이오니
	Back-End 개발시 이 파일을 반드시 삭제해 주세요 :)
*/
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