$(function () {
  // 歌单推荐部分
  // 给歌单推进板块添加鼠标滑入事件，显示隐藏两侧点击按钮
  showOrhide(".gdtj")
  // 监听鼠标移动到歌单推荐内两侧功能键的隐藏和显示
  showOrhide(".box2")
  // 监听鼠标移动到精彩推荐内两侧功能键的隐藏和显示
  showOrhide(".jctj")

  function showOrhide(dom) {
    $(dom).mouseenter(() => {
      // 移入显示
      $(`${dom}>div:eq(0),${dom}>div:eq(1)`).fadeIn(300);
    })
    $(dom).mouseleave(() => {
      // 移出隐藏
      $(`${dom}>div:eq(0),${dom}>div:eq(1)`).fadeOut(300);
    });
  }


  //监听顶部下拉菜单的鼠标移动事件
  var jtb1 = $(".openvip")[0];
  var jtb2 = $(".opentake")[0];
  var jt = $(".jt1")[0];
  var jt = $(".jt2")[0];
  var vipul = $(".vipul")[0];
  var takeul = $(".takeul")[0];

  jtb1.onmouseenter = function () {
    jt.style.transform = "rotate(180deg)";
    vipul.style.display = "block";
  };
  jtb1.onmouseleave = function () {
    jt.style.transform = "rotate(0deg)";
    vipul.style.display = "none";
  };
  jtb2.onmouseenter = function () {
    jt.style.transform = "rotate(180deg)";
    takeul.style.display = "block";
  };
  jtb2.onmouseleave = function () {
    jt.style.transform = "rotate(0deg)";
    takeul.style.display = "none";
  };
  //歌单推荐动态添加到页面
  //1定义歌单数组，存放歌曲信息
  var arr = [
    [
      {
        imgUrl: "images/tj1.jpg",
        title: "国风豪情|执一剑便可挡百万师",
        num: "播放量：218.1万",
      },
      {
        imgUrl: "images/tj2.jpg",
        title: "轻音乐|学习食用 学霸模式开启",
        num: "播放量：1284.8万",
      },
      {
        imgUrl: "images/tj3.jpg",
        title: "祝你生日快乐！",
        num: "播放量：273.6万",
      },
      {
        imgUrl: "images/tj4.jpg",
        title: "压迫感|匪气迷烟扑面而来！",
        num: "播放量：83.5万",
      },
      {
        imgUrl: "images/tj5.jpg",
        title: "小众英文｜世间所有温柔涌向你",
        num: "播放量：3398.2万",
      },
    ],
    [
      {
        imgUrl: "images/tj6.jpg",
        title: "90后回忆笺|你是否会想起我",
        num: "播放量：2883.5万",
      },
      {
        imgUrl: "images/tj7.jpg",
        title: "致失恋｜想起你时还总是会流泪",
        num: "播放量：3051.5万",
      },
      {
        imgUrl: "images/tj8.png",
        title: "Rapper情话看世间万物皆是浪漫",
        num: "播放量：2178.1万",
      },
      {
        imgUrl: "images/tj9.png",
        title: "孤独专用：散孤单的神仙伴侣",
        num: "播放量：18.1万",
      },
      {
        imgUrl: "images/tj10.jpg",
        title: "愁杀人没BGM，来这让你大杀四方",
        num: "播放量：99.9万",
      },
    ],
    [
      {
        imgUrl: "images/tj11.jpg",
        title: "『欧美电音』毒系旋律 注定无眠",
        num: "播放量：5543.1万",
      },
      {
        imgUrl: "images/tj12.jpg",
        title: "国粹戏腔 | 戏已开腔 怎叹风华",
        num: "播放量：83.5万",
      },
    ],
  ];
  //创建当前歌单的改变事件
  function render(s) {
    $(".gdtjul2 li").remove();
    for (const item of arr[s]) {
      // console.log(item);
      $(".gdtjul2 li>img").css("url", `${item.imgUrl}`);
      $(".gdtjul2").append(
        $(`<li>
            <div class="imgbox">
            <img src="${item.imgUrl}">
            </div>
            <div class="mask"></div>
            <div class="maskicon"></div>
            <a><span>${item.title}</span></a><br>
            <span>${item.num}</span>
          </li>`)
      );
    }

    //监听鼠标移动到歌单上触发的播放按钮显示隐藏事件
    //鼠标移上去显示
    $(".maskicon").mouseenter(function () {
      var a = $(".maskicon").index(this);
      $(".imgbox img").eq(a).css("transform", "scale(1.2)");
      $(".imgbox img").eq(a).css("transition", "500ms");
      $(this).css("opacity", "1");
      $(this).prev().css("opacity", "0.3");
    });
    //鼠标移开隐藏
    $(".maskicon").mouseleave(function () {
      var a = $(".maskicon").index(this);
      $(".imgbox img").eq(a).css("transform", "scale(1)");
      $(".imgbox img").eq(a).css("transition", "500ms");
      $(this).css("opacity", "0");
      $(this).prev().css("opacity", "0");

    });
    // 更改li圆点样式
    $(`.gdtjul3 li:eq(${s})`).css("opacity", "0.7");
    $(".gdtjul3 li").not($(`.gdtjul3 li:eq(${s})`)).css("opacity", "0.1");
  }


  //初始歌单的加载，默认为歌单1
  var s = 0;
  render(s);

  //监听歌单下面目录圆点的点击事件，切换到相应歌单页面
  $(".gdtjul3 li").click(function () {
    $(".gdtjul3 li").not(this).css("opacity", "0.1");
    $(this).css("opacity", "0.7");
    s = $(".gdtjul3 li").index(this);
    console.log(s);
    render(s);
  });
  //监听歌单推荐两侧的切换按钮点击事件，切换到相应歌单页面
  //向前切换
  $(".mid1").click(function () {
    if (s == 0) s = 2
    else s--
    render(s)
  });
  //向后切换
  $(".mid2").click(function () {
    if (s == 2) s = 0
    else s++
    render(s)
  });

  // 定义哪个小圆点控制轮播
  var i = 0;
  //创建定时器，对精彩推荐进行定时操作，改变推荐内容
  $(".jctjitem li").eq(0).css("opacity", "0.6");
  var time_swiper
  function swiper() {
    time_swiper = setInterval(() => {
      i++
      if (i == 4) {
        i = 0
        $(".bannerlist").css("left", "10px");
      } else {
        $(".bannerlist").animate({ left: '-=1320px' });
      }
      $(".jctjitem li").eq(i).css("opacity", "0.6");
      $(".jctjitem li").eq(i).siblings().css("opacity", "0.3");

    }, 2000);
  }
  swiper()
  $(".mid6").click(function () {
    clearInterval(time_swiper)
    if (i < 3) {
      i++;
      $(".bannerlist").animate({ left: '-=1320px' });
      $(".jctjitem li").eq(i).css("opacity", "0.6");
      $(".jctjitem li").eq(i).siblings().css("opacity", "0.3");
    }
    else if (i = 3) {
      i = 0;
      $(".bannerlist").css("left", "10px");
      $(".jctjitem li").eq(0).css("opacity", "0.6");
      $(".jctjitem li").eq(0).siblings().css("opacity", "0.3");
    }
    swiper()
  });
  $(".mid5").click(function () {
    clearInterval(time_swiper)
    if (i > 0) {
      i--;
      var p = $(".bannerlist").css("left");
      console.log(p);
      console.log(i);
      $(".bannerlist").animate({ left: '+=1320px' });
      $(".jctjitem li").eq(i).css("opacity", "0.6");
      $(".jctjitem li").eq(i).siblings().css("opacity", "0.3");

    }
    else {
      i = 3;
      $(".bannerlist").css("left", "-3950px");
      $(".jctjitem li").eq(3).css("opacity", "0.6");
      $(".jctjitem li").eq(3).siblings().css("opacity", "0.3");

    }
    swiper()
  });
});
