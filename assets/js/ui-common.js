$(function () {
	$(".form-control-datepicker").datepicker({
		showOn: "button",
		buttonImage: "../assets/images/ico-datepicker.png",
		buttonImageOnly: true,
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		showMonthAfterYear: true,
		yearSuffix: '년'
	});
});

// 모바일 상세 하단 고정 버튼
if ($('.content-footer').hasClass('floating-bottom')) {
	$('#content').css('padding-bottom', $('.content-footer').outerHeight());
}

// 탭메뉴
function tabListSetting() {
	$('.tab-list .on a').each(function () {
		var tg = $(this).attr('href');
		if (tg !== '#' && tg.charAt(0) === '#') {
			$(tg + '.tab-content').show();
		}
	});
}
tabListSetting();
$(document).on('click', '.tab-list a', function (e) {
	var tg = $(this).attr('href');
	var topSpacing = $('#detail-titlebar:visible').outerHeight() + $('.tab-sticky').outerHeight();

	$(this).parent('li').addClass('on').siblings('li').removeClass('on');
	if (tg === '#' || tg === '') {
		e.preventDefault();
	} else if (tg.charAt(0) === '#') {
		if ($(tg).hasClass('tab-content')) {
			e.preventDefault();
			$(tg).show().siblings('.tab-content').hide();
			$('html').animate({
				scrollTop: $(tg).offset().top - topSpacing
			}, 300);
		}
	}
});

// 모달 레이어
$(function () {
	$('.modal-popup.show').each(function () {
		openModal($(this), null);
	});
});

var modalOpener = null;
$(document).on('click', 'a.js-layer-open', function (e) {
	var tg = $(this).attr('href');
	openModal(tg, $(this));
	e.preventDefault();
}).on('click', '.js-layer-close, .modal-popup .btn-close-popup', function () {
	var target = $(this).closest('.modal-popup').attr('id');
	closeModal('#' + target, modalOpener);
}).on('keydown', '.modal-popup .btn-close-popup', function (e) {
	if (e.keyCode == 9 && !e.shiftKey) { // tab
		e.preventDefault();
		// $(this).siblings('.popup-header').attr('tabindex', '0').focus();
	}
}).on('keydown', '.modal-popup .popup-header', function (e) {
	if (e.keyCode == 9 && e.shiftKey) { // shift + tab
		e.preventDefault();
		// $(this).siblings('.btn-close-popup').focus();
	}
});

function openModal(_target, _opener) {
	modalOpener = _opener;
	$(_target).addClass('show').removeClass('hide');
	// setTimeout(function () {
	// 	$('.popup-header', _target).attr('tabindex', '0').focus();
	// }, 300);
	bodyScroll(true, $('body').width());
}

function closeModal(_target, _opener) {
	bodyScroll(false);
	var tg = null;

	if (_opener) {
		tg = $(_target);
		modalOpener = $(_opener);
	} else {
		tg = $('.modal-popup.show');
		modalOpener = null;
	}

	$(tg).addClass('hide').removeClass('show');
	if (modalOpener !== null) {
		// modalOpener.focus();
		modalOpener = null;
	}
}

function bodyScroll(_status, _orgWidth) {
	var $fixedObj = $('body');
	if (_status) {
		$('body').addClass('modal-open');
		if ($('html').get(0).scrollWidth > $('html').width() === false) {
			$fixedObj.css('margin-right', $('body').width() - _orgWidth);
		}
	} else {
		$fixedObj.css('margin-right', '');
		$('body').removeClass('modal-open');
	}
}


// 파일첨부 타입2
$(function () {
	$('.form-file2').on('change', function () {
		if (window.FileReader) {
			// modern browser
			var filename = $(this)[0].files[0].name;
		} else {
			// old IE 
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).next('.i-file-name').val(filename);
	});

	$(".file-choice").each(function (i) {
		$(".file-choice").eq(i).find(".input-group .delete").click(function () {
			if ($(".file-choice").eq(i).find("li").length == 1) {
				alert("더이상 삭제할 수 없습니다.")
			} else {

				$(this).closest("li").remove();
			}
		})
	})

});
$(document).on('click', '.btn-file-open', function () {
	$(this).next().click();
});