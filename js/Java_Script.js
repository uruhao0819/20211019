// 迴圈 寫入 html 畫面
AddArticle();

function AddArticle() {
    // 陣列 id
    let ArtId = ['PortfolioBox', 'AboutBox', 'ProjectBox'];
    let ArtH1 = ['PortfolioTitle','AboutTitle','ProjectTitle'];
    let ArtH1Con =['作品介紹','自我介紹','服務項目'];
    let ArtDiv = ['PorCon', 'AboCon', 'ProCon']

    // 主要的 article id=main
    let Main = document.getElementById("main");

    // 產出 3 個標籤
    for ( let i = 0; i < ArtId.length; i++ ) {
        // 要新增的標籤 article
        let art = document.createElement("article");
        let h1 = document.createElement("h1");
        let div = document.createElement("div");

        // 新增 article 的 id
        art.setAttribute("id", ArtId[i]);
        h1.setAttribute("id", ArtH1[i]);
        div.setAttribute("class", ArtDiv[i]);

        // 在框架內新增子元素 main > article
        Main.appendChild(art);
        art.appendChild(h1);
        art.appendChild(div);

        // 標籤要在 #ContactBox 之上
        let Con = document.getElementById("ContactBox");
        Con.before(art);

        // 置入文字
        h1.innerHTML = ArtH1Con[i];
    }
    
    // 將網頁資料，用載入的方式置入框架中
    $('.PorCon').load('../webs/graphic.html');
};

// jQuery 語法
// 行動裝置選單按鈕，開啟與關閉
// 1. 隱藏 MobileNav 區塊
$('#MobileNav').hide();

// 2. 點擊按鈕 Menu 開啟 MobileNav 區塊
$('#Menu').click( function(){
    $('#MobileNav').show();
});

// 3. 點擊 Close 關閉 MobileNav 區塊
$('.Close').click( function(){
    $('#MobileNav').hide();
});

TopBtn();

// 控制 Top 按鈕
function TopBtn() {
    // 宣告變數 指向 Top 之下 a 標籤
    let Top = $('#Top');
    let Topa = $('#Top > a');
    // 隱藏按鈕
    Top.hide();

    // 設定按鈕行為
    Topa.click( function() {
        // 執行的動畫 : 當點擊按鈕時，畫面捲動到網頁最上方，加上滑動的秒數
        $('html, boy').animate({scrollTop:0}, 0.333);
    });

    // 畫面高度 大於 300px，按鈕會出現 ; 低於 300px，按鈕會隱藏
    $(window).scroll(function () {
        if( $(this).scrollTop() > 300) {
            // 淡入
            Top.fadeIn(222);
        } else {
            // 淡出 先停止之前的動畫，再執行新的動畫
            Top.stop().fadeOut(222);
        }
    });
};

BannerChang();

// 控制 Banner
function BannerChang() {
    // 宣告按鈕變數
    let P01 = document.getElementById('P01');
    let P02 = document.getElementById('P02');
    let P03 = document.getElementById('P03');
    let P04 = document.getElementById('P04');
    let P05 = document.getElementById('P05');
    let Images = document.getElementById('Images');

    // 按鈕執行的動作
    $(P01).click(function(){
        // jQuery 函式庫語法
        // $(Images).css({
        //     transform: 'translateX(0vw)',
        //     transition: 'transform 1s'
        // })

        // javascript 的語法
        Images.style.transform = 'translateX(0vw)';
        Images.style.transition = 'transform 1s';
    });

    $(P02).click(function(){
        $(Images).css({
            transform: 'translateX(-100vw)',
            transition: 'transform 1s'
        })
    });

    $(P03).click(function(){
        $(Images).css({
            transform: 'translateX(-200vw)',
            transition: 'transform 1s'
        })
    });

    $(P04).click(function(){
        $(Images).css({
            transform: 'translateX(-300vw)',
            transition: 'transform 1s'
        })
    });

    $(P05).click(function(){
        $(Images).css({
            transform: 'translateX(-400vw)',
            transition: 'transform 1s'
        })
    });
};