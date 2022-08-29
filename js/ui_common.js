$(function () {
  // 함수안에서 사용하는 변수는 함수호출위에서 대입해야함

  // PC gnb
  var header = $('#header');

  function headerAnimation() {
    $('#header .gnb').on('mouseenter', function () {
      header.addClass('on');
    });
    header.on('mouseleave', function () {
      header.removeClass('on');
    });

    // 스크롤시 fixed
    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      if (st > 0) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
      }
    });
  }
  headerAnimation();

  // 모바일 gnb
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();
    $('#header .gnb_area').addClass('on');
    $('#header .gnb_dimmed').fadeIn();
    // dimmed
    $('body').addClass('on');
  });

  $('#header .gnb_area .btn_close, #header .gnb_dimmed').on('click', function () {
    $('#header .gnb_area').removeClass('on');
    $('#header .gnb_dimmed').fadeOut();
    // dimmed
    $('body').removeClass('on');
  });

  // 모바일 메뉴 아코디언
  $('#header .m_gnb>li>a').click(function (e) {
    e.preventDefault();

    // 서브메뉴 닫혀있을때
    // is(':visible')은 css('display') === 'none'과 같음
    if (!$(this).next().is(':visible')) {
      $(this).addClass('on').parent().siblings().find('>a').removeClass('on');
      $(this).next().slideDown().parent().siblings().find('.depth02').slideUp();
    } else {
      // 서브메뉴 열려있을때
      $(this).removeClass('on');
      $(this).next().slideUp();
    }
  });

  // 메인 슬라이더
  var mainSlider = new Swiper('.main_slider .swiper-container', {
    loop: true,
    speed: 500,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 비지니스 슬라이더
  var businesSlider = new Swiper('.main_business .swiper-container', {
    loop: true,
    speed: 1111,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
  // 비지니스 슬라이더 마우스 mouseover시 멈춤
  $('.swiper-slide').on('mouseover', function () {
    businesSlider.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function () {
    businesSlider.autoplay.start();
  });

  // notice 탭메뉴
  $('.main_notice .tab_menu li').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault(); // a태그 기본이벤트 막기

      // 탭 li>a 클릭시 .active 클래스 걸기
      // 나머지 형제요소는 .active클래스 제거
      $(this).addClass('active').siblings().removeClass('active');

      // 탭 내용 연결
      $('.main_notice .notice_list_wrap').eq(i).addClass('on').siblings().removeClass('on');
    });
  });

  // 탑버튼
  $('#footer .top_wrap a:before').hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.top_wrap').fadeIn();
      } else {
        $('.top_wrap').fadeOut();
      }
    });
  });
});
