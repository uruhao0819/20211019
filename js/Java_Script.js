// AddArticle();
AddArticles();
function AddArticles() {
    // 陣列 id
    let ArtId = ['PortfolioBox', 'AboutBox', 'ProjectBox'];
    let ArtH1 = ['PortfolioTitle','AboutTitle','ProjectTitle'];
    let ArtH1Con =['作品介紹','自我介紹','服務項目'];
    let ArtH1PorDiv = ['MGraphic','MWeb','MAudio'];

    // 主要的 article id=main
    let Main = document.getElementById("main");

    // 產出 3 個標籤
    for ( let i = 0; i < ArtId.length; i++ ) {
        // 要新增的標籤 article
        let art = document.createElement("article");
        let h1 = document.createElement("h1");

        // 新增 article 的 id
        art.setAttribute("id", ArtId[i]);
        h1.setAttribute("class", ArtId[i]);

        // 在框架內新增子元素 main > article
        Main.appendChild(art);
        art.appendChild(h1);

        // 標籤要在 #ContactBox 之上
        let Con = document.getElementById("ContactBox");
        Con.before(art);

        // 置入文字
        h1.innerHTML = ArtH1Con[i];
    }

    let Por = document.getElementById("PortfolioBox");

        for ( let i = 0; i < ArtH1PorDiv.length; i++ ) {
            let div = document.createElement("div");

            div.setAttribute("id", ArtH1PorDiv[i]);

            Por.appendChild(div);

            div.innerHTML = ArtH1PorDivH1[i];
        }
    
    // 將網頁資料，用載入的方式置入框架中
    $('PortfolioBox').load('../webs/graphic.html');
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

function AddArticle() {
    // 呼叫主要的 article id=main
    let Main = document.getElementById('main');

    // 新增 article
    let art = document.createElement("article");

    // 新增 article 的屬性 setAttribute("id or class", "自訂名稱") id
    art.setAttribute("id", "Portfolio");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    // art.innerHTML = "<h1>在 Por 元素的開頭</h1>";

    // 在 article 新增 h1
    let h1 = document.createElement('h1');

    h1.textContent = "作品分享";

    art.appendChild(art);

    // 取得 html 標籤 ( 元素 ) 中添加的子元素
    Main.appendChild(art);

    // 1. 在被選取的元素結尾插入內容 append() 置入被選取元素之中

    // 2. 在被選取的元素開頭插入內容 prepend() 置入被選取元素之中

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前

    // 4. 在被選取的元素之後插入內容 after() 置入被選取元素標籤之後

    let Por = document.getElementById("PortfolioBox");

    Por.before(art);
};