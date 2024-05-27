$(function () {



  // ハンバーガーメニュー
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });
  




  // luxy.init({
  //   wrapper: '#luxy',
  //   targets : '.luxy-el',
  //   wrapperSpeed: 0.08
  //   });
  
  $windowWidth = window.innerWidth;
  $breakPointA = 768;
  $breakPointB = 960;
  
  isMobileSize = ($windowWidth < $breakPointA);
  isTabletSize = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
  isPcSize = ($windowWidth > $breakPointB);
  if(isMobileSize){ 
  }
  else{
  luxy.init({
  wrapper: '#luxy',
  targets : '.luxy-el',
  wrapperSpeed: 0.08
  });
  }
 



// // 画面サイズが変更されたときに初期化関数を再実行
// window.addEventListener('resize', initLuxy);
// jQuery( function( $ ) {
// if (window.matchMedia( "(min-width: 960px)" ).matches) {

//   // $.getScript('js/luxy.min.js').then(function(){
// 	// 	// fullPageを読み込みんで実行完了したら実行される
// 	// 	luxy.init({
// 	// });
//   document.write('<script src="js/luxy.min.js"></script>');
// }

// // });


//写真がズームインして登場
function zoomInAnime(){

  $('.anime').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight +50 ){
    $(this).addClass('zoomIn');// 画面内に入ったらfadeUpというクラス名を追記
    }
    else{
    $(this).removeClass('zoomIn');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    zoomInAnime();/* アニメーション用の関数を呼ぶ*/
  });



  //開始時のアニメーション
//   $(window).on('load',function(){
//     $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//     $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
//   });
//   $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
//     $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

// });
//=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

});
$('.splashbg').on('animationend', function() {    
  //この中に動かしたいJSを記載
});

});


// function initLuxy() {

//   var windowWidth = window.innerWidth;
//   var breakPointA = 768; // スマホの最大幅
//   var breakPointB = 960; // タブレットの最大幅


//   var isPcSize = windowWidth > breakPointB;

//   // PCサイズの場合、luxy.jsを初期化
//   if (isPcSize) {
//     luxy.init({
//       wrapper: '#luxy',
//       targets: '.luxy-el',
//       wrapperSpeed: 0.08
//     });
//   } else {
//     // PCサイズ以外の場合、luxy.jsを無効化
//     if (luxy) {
//       luxy.destroy();
//     }
//   }
// }

// // // 初期化関数を実行
// initLuxy();