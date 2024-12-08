'use strict';

$(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
        // クリックしたaタグのリンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
        let target = $(href == "#" || href == "index.html" ? "html" : href);
        // ページトップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({ scrollTop: position }, 700, "swing");
        // urlが変化しないようにfalseを返す
        return false;
    });
});

// -------------------------------------------
// to-top
// -------------------------------------------
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) { // 100pxスクロールしていたら上に戻るボタンを表示
        $(".to-top").fadeIn();
    } else {
        $(".to-top").fadeOut();
    }
});
$(".to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800); // 800msかけて上に戻る
});

// -------------------------------------------
// ハンバーガー
// -------------------------------------------
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// -------------------------------------------

// -------------------------------------------
// アニメーション関数の定義
function fadeAnime() {
    // 各トリガークラスを対象にループ処理
    $(".fadeInTrigger").each(function () {
        let elemPos = $(this).offset().top - 50; // 要素の位置を取得
        let scroll = $(window).scrollTop(); // 現在のスクロール位置
        let windowHeight = $(window).height(); // ウィンドウの高さ

        // 要素が画面内に入った場合
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeIn");
        } else {
            $(this).removeClass("fadeIn");
        }
    });

    $(".fadeUpTrigger").each(function () {
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeUp");
        } else {
            $(this).removeClass("fadeUp");
        }
    });

    $(".fadeDownTrigger").each(function () {
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeDown");
        } else {
            $(this).removeClass("fadeDown");
        }
    });

    $(".fadeLeftTrigger").each(function () {
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeLeft");
        } else {
            $(this).removeClass("fadeLeft");
        }
    });

    $(".fadeRightTrigger").each(function () {
        let elemPos = $(this).offset().top - 50;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeRight");
        } else {
            $(this).removeClass("fadeRight");
        }
    });
}

// ページ読み込み時とスクロール時にアニメーションを実行
$(window).on("load scroll", function () {
    fadeAnime();
});
