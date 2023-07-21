$(function () {
  //监听歌曲的移入移出
  $(".list_music").hover(
    function () {
      //显示子菜单
      $(this).find(".listmeun").stop().fadeIn(100);
      $(this).find(".listtime a").stop().fadeIn(100);
      //隐藏时长
      $(this).find(".listtime span").stop().fadeOut(100);
    },
    function () {
      //隐藏子菜单
      $(this).find(".listmeun").stop().fadeOut(100);
      $(this).find(".listtime a").stop().fadeOut(100);
      //显示时长
      $(this).find(".listtime span").stop().fadeIn(100);
    }
  );
  //2监听复选框的点击事件
  $(".listcheck").click(function () {
    $(this).toggleClass("listchecked");
  });
});
