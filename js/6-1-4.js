var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 600){
      var responsiveImage = [//PC用の画像
        { src: 'img/TOP6.jpg'},
        { src: 'img/TOP2.jpg'},
        { src: 'img/TOP7.jpg'},
        { src: 'img/TOP12.jpg'},
        { src: 'img/TOP10.jpg'},
        { src: 'img/TOP9.jpg'}
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
      { src: 'img/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg'},
        { src: 'img/portrait-5601950_1280.jpg'},
        { src: 'img/rafaella-mendes-diniz-AoL-mVxprmk-unsplash.jpg'},
        { src: 'img/valerie-elash-XUT7V_md7sc-unsplash.jpg'},
        { src: 'img/TOP11.jpg'},
        { src: 'img/TOP1.jpg'}
      ];
    }

//Vegas全体の設定

$('#slider').vegas({
    overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });