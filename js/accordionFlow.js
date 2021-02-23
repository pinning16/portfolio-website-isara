$(function () {
    // 最初のコンテンツ以外は非表示
    $(".flow__accordion-content:not(:first-of-type)").css("display", "none");
    // 矢印の向きを変えておく
    $(".flow__accordion-title:first-of-type").addClass("open");
   
// // クリックしてコンテンツ残る
// $('.js-accordion-title').on('click', function () {
//     /*クリックでコンテンツを開閉*/
//     $(this).next().slideToggle(200);
//     /*矢印の向きを変更*/
//     $(this).toggleClass('open', 200);
//   });

// コンテンツremove
    $(".flow-accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    });
});

// 複数の場合はaccordionの前に名前を変更